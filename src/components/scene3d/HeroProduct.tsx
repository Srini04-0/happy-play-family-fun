
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function HeroProduct() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15
    }
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[1.5, 64, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#007AFF" 
          metalness={0.9} 
          roughness={0.05}
          envMapIntensity={1.2}
        />
      </Sphere>
      <Text
        position={[0, -3, 0]}
        fontSize={1}
        color="#1d1d1f"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.02}
      >
        iPhone 15 Pro
      </Text>
      <Text
        position={[0, -3.8, 0]}
        fontSize={0.4}
        color="#6e6e73"
        anchorX="center"
        anchorY="middle"
      >
        Titanium. So strong. So light. So Pro.
      </Text>
    </group>
  )
}
