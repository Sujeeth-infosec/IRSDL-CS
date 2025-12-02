import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NetworkParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  const velocities = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    
    velocities[i * 3] = (Math.random() - 0.5) * 0.02
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
  }

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3]
        positions[i * 3 + 1] += velocities[i * 3 + 1]
        positions[i * 3 + 2] += velocities[i * 3 + 2]
        
        if (Math.abs(positions[i * 3]) > 10) velocities[i * 3] *= -1
        if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1
        if (Math.abs(positions[i * 3 + 2]) > 10) velocities[i * 3 + 2] *= -1
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      
      // Update lines
      if (linesRef.current) {
        const linePositions: number[] = []
        const maxDistance = 3
        
        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = positions[i * 3] - positions[j * 3]
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
            
            if (distance < maxDistance) {
              linePositions.push(
                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
              )
            }
          }
        }
        
        linesRef.current.geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        )
      }
    }
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#3b82f6" transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </lineSegments>
    </>
  )
}

const ParticleNetwork = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <NetworkParticles />
      </Canvas>
    </div>
  )
}

export default ParticleNetwork
