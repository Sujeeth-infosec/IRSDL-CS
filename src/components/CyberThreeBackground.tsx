import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const CyberThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0e27, 0.015)
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    camera.position.set(0, 20, 50)

    // Create animated grid floor
    const gridSize = 100
    const gridDivisions = 50
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x00ffff, 0x004466)
    gridHelper.position.y = -20
    gridHelper.material.transparent = true
    gridHelper.material.opacity = 0.3
    scene.add(gridHelper)

    // Create particle network
    const particleCount = 200
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 120
      positions[i + 1] = (Math.random() - 0.5) * 120
      positions[i + 2] = (Math.random() - 0.5) * 120

      // Cyan/blue/purple color scheme
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i] = 0.0
        colors[i + 1] = 0.8 + Math.random() * 0.2
        colors[i + 2] = 1.0
      } else if (colorChoice < 0.66) {
        colors[i] = 0.3 + Math.random() * 0.3
        colors[i + 1] = 0.0
        colors[i + 2] = 1.0
      } else {
        colors[i] = 0.0
        colors[i + 1] = 1.0
        colors[i + 2] = 0.8 + Math.random() * 0.2
      }
      
      sizes[i / 3] = Math.random() * 1.5 + 0.5
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
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

    // Add glowing orbs with different colors
    const orbGeometry = new THREE.SphereGeometry(0.8, 20, 20)
    const orbs: THREE.Mesh[] = []
    const orbColors = [0x00ffff, 0x0088ff, 0xff00ff, 0x00ff88, 0x8800ff]
    
    for (let i = 0; i < 12; i++) {
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: orbColors[i % orbColors.length],
        transparent: true,
        opacity: 0.7
      })
      const orb = new THREE.Mesh(orbGeometry, orbMaterial)
      orb.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      )
      scene.add(orb)
      orbs.push(orb)
    }

    // Add hexagonal rings
    const hexRings: THREE.Mesh[] = []
    const ringGeometry = new THREE.TorusGeometry(3, 0.1, 6, 6)
    
    for (let i = 0; i < 5; i++) {
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.4,
        wireframe: true
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      )
      ring.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      scene.add(ring)
      hexRings.push(ring)
    }

    // Add data stream lines
    const streamLines: THREE.Line[] = []
    for (let i = 0; i < 15; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 100
      const startZ = (Math.random() - 0.5) * 100
      
      for (let j = 0; j < 50; j++) {
        points.push(new THREE.Vector3(
          startX + Math.sin(j * 0.1) * 5,
          -30 + j * 1.5,
          startZ + Math.cos(j * 0.1) * 5
        ))
      }
      
      const streamGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const streamMaterial = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x00ffff : 0xff00ff,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      })
      const streamLine = new THREE.Line(streamGeometry, streamMaterial)
      scene.add(streamLine)
      streamLines.push(streamLine)
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
      particleSystem.rotation.y += 0.0008
      particleSystem.rotation.x += 0.0003

      // Animate grid
      gridHelper.rotation.y += 0.0005

      // Animate orbs with orbital motion
      orbs.forEach((orb, i) => {
        const time = Date.now() * 0.001
        const radius = 30 + i * 5
        const speed = 0.2 + i * 0.1
        
        orb.position.x = Math.cos(time * speed + i) * radius
        orb.position.z = Math.sin(time * speed + i) * radius
        orb.position.y = Math.sin(time * 0.5 + i) * 20
        
        const material = orb.material as THREE.MeshBasicMaterial
        material.opacity = 0.5 + Math.sin(time * 2 + i) * 0.3
        
        // Pulse effect
        const scale = 1 + Math.sin(time * 3 + i) * 0.2
        orb.scale.set(scale, scale, scale)
      })

      // Animate hexagonal rings
      hexRings.forEach((ring, i) => {
        ring.rotation.x += 0.01 + i * 0.002
        ring.rotation.y += 0.008 + i * 0.001
        const material = ring.material as THREE.MeshBasicMaterial
        material.opacity = 0.3 + Math.sin(Date.now() * 0.002 + i) * 0.2
      })

      // Animate data streams
      streamLines.forEach((line, i) => {
        line.position.y += 0.5
        if (line.position.y > 50) {
          line.position.y = -30
        }
        const material = line.material as THREE.LineBasicMaterial
        material.opacity = 0.2 + Math.sin(Date.now() * 0.003 + i) * 0.15
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
