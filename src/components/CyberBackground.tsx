import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const CyberBackground = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0a0e27, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create cyber network nodes
    const nodeCount = 100
    const nodes: THREE.Vector3[] = []
    const nodeGroup = new THREE.Group()

    // Create nodes with cyber colors (green/cyan)
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.3, 8, 8)
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0x00ff88 : i % 3 === 1 ? 0x00d4ff : 0x0a0e27,
        transparent: true,
        opacity: 0.7,
      })
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      
      const x = (Math.random() - 0.5) * 150
      const y = (Math.random() - 0.5) * 100
      const z = (Math.random() - 0.5) * 120
      
      node.position.set(x, y, z)
      nodes.push(node.position)
      nodeGroup.add(node)
    }
    scene.add(nodeGroup)

    // Create cyber connections
    const connections: THREE.Line[] = []
    const connectionGroup = new THREE.Group()
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j])
        if (distance < 35) {
          const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i], nodes[j]])
          const material = new THREE.LineBasicMaterial({
            color: 0x00ff88,
            transparent: true,
            opacity: 0.2 * (1 - distance / 35),
          })
          const line = new THREE.Line(geometry, material)
          connectionGroup.add(line)
          connections.push(line)
        }
      }
    }
    scene.add(connectionGroup)

    // Create cyber geometric shapes
    const shapesGroup = new THREE.Group()
    const shapes: Array<{ mesh: THREE.Mesh; rotationSpeed: THREE.Vector3; floatSpeed: number }> = []

    const createShape = (type: 'box' | 'octahedron' | 'tetrahedron', color: number, position: THREE.Vector3) => {
      let geometry: THREE.BufferGeometry
      switch (type) {
        case 'box':
          geometry = new THREE.BoxGeometry(4, 4, 4)
          break
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(3)
          break
        case 'tetrahedron':
          geometry = new THREE.TetrahedronGeometry(3)
          break
      }

      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.08,
        wireframe: true,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.copy(position)
      shapesGroup.add(mesh)

      shapes.push({
        mesh,
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        floatSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    // Add cyber shapes
    createShape('box', 0x00ff88, new THREE.Vector3(-30, 25, -50))
    createShape('octahedron', 0x00d4ff, new THREE.Vector3(35, -20, -40))
    createShape('tetrahedron', 0x00ff88, new THREE.Vector3(-25, -30, -60))
    createShape('box', 0x00d4ff, new THREE.Vector3(30, 30, -55))

    scene.add(shapesGroup)

    // Create cyber particles
    const particleCount = 200
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesPositions = new Float32Array(particleCount * 3)
    const particlesColors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      particlesPositions[i3] = (Math.random() - 0.5) * 250
      particlesPositions[i3 + 1] = (Math.random() - 0.5) * 180
      particlesPositions[i3 + 2] = (Math.random() - 0.5) * 250

      const color = new THREE.Color()
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        color.setHex(0x00ff88) // Cyber green
      } else if (colorChoice < 0.8) {
        color.setHex(0x00d4ff) // Cyber cyan
      } else {
        color.setHex(0x0a0e27) // Dark
      }
      particlesColors[i3] = color.r
      particlesColors[i3 + 1] = color.g
      particlesColors[i3 + 2] = color.b
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particlesColors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Animate nodes
      nodeGroup.children.forEach((node, i) => {
        const mesh = node as THREE.Mesh
        const baseY = nodes[i].y
        mesh.position.y = baseY + Math.sin(elapsedTime * 0.5 + i) * 2
        mesh.position.x = nodes[i].x + Math.cos(elapsedTime * 0.3 + i) * 1.5
        mesh.rotation.y += 0.01
      })

      // Update connections with pulsing effect
      connections.forEach((line) => {
        const positions = line.geometry.attributes.position
        if (positions) {
          const opacity = 0.15 + Math.sin(elapsedTime * 2) * 0.1
          ;(line.material as THREE.LineBasicMaterial).opacity = opacity
        }
      })

      // Animate shapes
      shapes.forEach((shape) => {
        shape.mesh.rotation.x += shape.rotationSpeed.x
        shape.mesh.rotation.y += shape.rotationSpeed.y
        shape.mesh.rotation.z += shape.rotationSpeed.z
        shape.mesh.position.y += Math.sin(elapsedTime * shape.floatSpeed) * 0.05
      })

      // Animate particles
      particles.rotation.y = elapsedTime * 0.12
      particles.rotation.x = elapsedTime * 0.06

      // Camera subtle movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 2
      camera.position.y = Math.cos(elapsedTime * 0.15) * 2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      const newWidth = mountRef.current.clientWidth
      const newHeight = mountRef.current.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      renderer.dispose()
      particlesMaterial.dispose()
      particlesGeometry.dispose()
      nodeGroup.clear()
      connectionGroup.clear()
      shapesGroup.clear()
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}

export default CyberBackground
