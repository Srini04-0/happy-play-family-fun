
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface ProductShowcaseProps {
  position: [number, number, number]
  color: string
  title: string
  subtitle: string
}

export default function ProductShowcase({ position, color, title, subtitle }: ProductShowcaseProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        <RoundedBox ref={meshRef} args={[2, 2, 0.2]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color={color} 
            metalness={0.8} 
            roughness={0.1} 
            envMapIntensity={0.8}
          />
        </RoundedBox>
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.4}
          color="#1d1d1f"
          anchorX="center"
          anchorY="middle"
          font="/fonts/SF-Pro-Display-Bold.woff"
        >
          {title}
        </Text>
        <Text
          position={[0, -2.4, 0]}
          fontSize={0.2}
          color="#6e6e73"
          anchorX="center"
          anchorY="middle"
        >
          {subtitle}
        </Text>
      </group>
    </Float>
  )
}
