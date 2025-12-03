import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const CyberThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 50

    // Create particle network
    const particleCount = 150
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100
      positions[i + 1] = (Math.random() - 0.5) * 100
      positions[i + 2] = (Math.random() - 0.5) * 100

      // Blue/cyan color scheme
      colors[i] = 0.2 + Math.random() * 0.3     // R
      colors[i + 1] = 0.5 + Math.random() * 0.5 // G
      colors[i + 2] = 0.8 + Math.random() * 0.2 // B
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Create connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00aaff,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    })

    const lineGeometry = new THREE.BufferGeometry()
    const linePositions: number[] = []

    // Connect nearby particles
    const posArray = particles.attributes.position.array
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = posArray[i * 3] - posArray[j * 3]
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1]
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < 15) {
          linePositions.push(
            posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2],
            posArray[j * 3], posArray[j * 3 + 1], posArray[j * 3 + 2]
          )
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineSystem)

    // Add glowing orbs
    const orbGeometry = new THREE.SphereGeometry(0.5, 16, 16)
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6
    })

    const orbs: THREE.Mesh[] = []
    for (let i = 0; i < 8; i++) {
      const orb = new THREE.Mesh(orbGeometry, orbMaterial.clone())
      orb.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      )
      scene.add(orb)
      orbs.push(orb)
    }

    // Animation
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth camera movement
      targetX = mouseX * 5
      targetY = mouseY * 5
      camera.position.x += (targetX - camera.position.x) * 0.05
      camera.position.y += (targetY - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      // Rotate particle system
      particleSystem.rotation.y += 0.0005
      particleSystem.rotation.x += 0.0002

      // Animate orbs
      orbs.forEach((orb, i) => {
        orb.position.y += Math.sin(Date.now() * 0.001 + i) * 0.02
        orb.position.x += Math.cos(Date.now() * 0.001 + i) * 0.02
        const material = orb.material as THREE.MeshBasicMaterial
        material.opacity = 0.4 + Math.sin(Date.now() * 0.002 + i) * 0.2
      })

      // Update line positions
      const posArray = particles.attributes.position.array
      const linePos = lineGeometry.attributes.position.array as Float32Array
      let lineIndex = 0

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3]
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1]
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 15 && lineIndex < linePos.length) {
            linePos[lineIndex] = posArray[i * 3]
            linePos[lineIndex + 1] = posArray[i * 3 + 1]
            linePos[lineIndex + 2] = posArray[i * 3 + 2]
            linePos[lineIndex + 3] = posArray[j * 3]
            linePos[lineIndex + 4] = posArray[j * 3 + 1]
            linePos[lineIndex + 5] = posArray[j * 3 + 2]
            lineIndex += 6
          }
        }
      }

      lineGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)'
      }}
    />
  )
}

export default CyberThreeBackground
