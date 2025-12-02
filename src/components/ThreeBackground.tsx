import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 100
      const y = (Math.random() - 0.5) * 100
      const z = (Math.random() - 0.5) * 100
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#88ccff"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const ThreeBackground = () => {
  useEffect(() => {
    return () => {
      // Cleanup on unmount
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: false,
          powerPreference: 'low-power',
          failIfMajorPerformanceCaveat: true
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0f172a', 1)
        }}
      >
        <StarField />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
