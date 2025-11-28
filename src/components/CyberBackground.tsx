import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const WAVE_SEGMENTS = 90

const CyberBackground = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 300)
    camera.position.set(0, 0, 80)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    const wavesGroup = new THREE.Group()
    scene.add(wavesGroup)

    const lineMaterials = [
      new THREE.LineBasicMaterial({ color: '#4BC9FF', transparent: true, opacity: 0.45 }),
      new THREE.LineBasicMaterial({ color: '#7B5BFF', transparent: true, opacity: 0.35 }),
      new THREE.LineBasicMaterial({ color: '#F45BFF', transparent: true, opacity: 0.25 }),
    ]

    const waveData = lineMaterials.map((material, index) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array((WAVE_SEGMENTS + 1) * 3)
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const line = new THREE.Line(geometry, material)
      line.position.z = -index * 4
      line.position.y = index * 2 - 2
      wavesGroup.add(line)
      return { geometry, phase: Math.random() * Math.PI * 2, amplitude: 2.5 + index * 1.5 }
    })

    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 120
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 160
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 70
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.25,
      color: '#9DEBFF',
      transparent: true,
      opacity: 0.85,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    let frameId: number
    const animate = () => {
      const time = performance.now() * 0.0006
      waveData.forEach(({ geometry, phase, amplitude }) => {
        const attr = geometry.getAttribute('position') as THREE.BufferAttribute
        for (let i = 0; i <= WAVE_SEGMENTS; i++) {
          const progress = i / WAVE_SEGMENTS
          const x = progress * 160 - 80
          const y = Math.sin(progress * 4 + time + phase) * amplitude
          const z = Math.cos(progress * 2 + time * 1.4 + phase) * 0.6
          attr.setXYZ(i, x, y, z)
        }
        attr.needsUpdate = true
      })
      particles.rotation.y += 0.0004
      particles.rotation.x += 0.00015
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    const handleResize = () => {
      if (!mountRef.current) return
      const newWidth = mountRef.current.clientWidth
      const newHeight = mountRef.current.clientHeight
      renderer.setSize(newWidth, newHeight)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameId)
      renderer.dispose()
      particlesMaterial.dispose()
      lineMaterials.forEach((material) => material.dispose())
      wavesGroup.clear()
      particlesGeometry.dispose()
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
}

export default CyberBackground

