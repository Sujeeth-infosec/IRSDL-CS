import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const geometry = new THREE.PlaneGeometry(20, 20, 50, 50)
  const positions = geometry.attributes.position.array as Float32Array

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        
        positions[i + 2] = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(y * 0.5 + time) * 0.5
      }
      
      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()
      
      meshRef.current.rotation.z = time * 0.1
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -5]}>
      <meshStandardMaterial
        color="#1e40af"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <WaveMesh />
      </Canvas>
    </div>
  )
}

export default WaveBackground
