import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

function CyberGrid() {
  const ref = useRef<THREE.Points>(null)
  const lineRef = useRef<THREE.Group>(null)
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 800; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 50
      const z = (Math.random() - 0.5) * 50
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < 100; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      )
      const end = new THREE.Vector3(
        start.x + (Math.random() - 0.5) * 10,
        start.y + (Math.random() - 0.5) * 10,
        start.z + (Math.random() - 0.5) * 10
      )
      lines.push([start, end])
    }
    return lines
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (lineRef.current) {
      lineRef.current.rotation.y = -state.clock.elapsedTime * 0.05
    }
  })

  return (
    <>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.8}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      
      <group ref={lineRef}>
        {connections.map((points, i) => (
          <Line
            key={i}
            points={points}
            color="#0066ff"
            lineWidth={1}
            transparent
            opacity={0.3}
          />
        ))}
      </group>
    </>
  )
}

function FloatingCubes() {
  const meshRef = useRef<THREE.Group>(null)
  
  const cubes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.5 + 0.2
    }))
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.children.forEach((child, i) => {
        child.rotation.x += 0.01 * (i % 2 === 0 ? 1 : -1)
        child.rotation.y += 0.01 * (i % 3 === 0 ? 1 : -1)
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01
      })
    }
  })

  return (
    <group ref={meshRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position as [number, number, number]} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial 
            color="#ff0080" 
            transparent 
            opacity={0.4}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

const DarkThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1)
        }}
      >
        <ambientLight intensity={0.1} />
        <CyberGrid />
        <FloatingCubes />
      </Canvas>
    </div>
  )
}

export default DarkThreeBackground