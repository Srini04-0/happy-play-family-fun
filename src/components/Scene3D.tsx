
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Float, Sphere, Box, Cone, Environment, PerspectiveCamera } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingGame({ position, color, text }: { position: [number, number, number], color: string, text: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <Box ref={meshRef} args={[1, 1, 1]}>
          <meshStandardMaterial color={color} />
        </Box>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  )
}

function FloatingProduct({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} position={position} args={[0.8, 32, 32]}>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </Sphere>
    </Float>
  )
}

function CenterLogo() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group>
      <Cone ref={meshRef} args={[1.5, 3, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.4} />
      </Cone>
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        HAPPY 2 PLAY
      </Text>
      <Text
        position={[0, -3.5, 0]}
        fontSize={0.3}
        color="#f97316"
        anchorX="center"
        anchorY="middle"
      >
        Family Entertainment Center
      </Text>
    </group>
  )
}

function Scene3DContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={true}
        maxDistance={20}
        minDistance={5}
      />
      
      <Environment preset="city" />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#f97316" />
      
      <CenterLogo />
      
      {/* Floating Games */}
      <FloatingGame position={[-4, 2, -2]} color="#10b981" text="Arcade Games" />
      <FloatingGame position={[4, 2, -2]} color="#3b82f6" text="VR Experience" />
      <FloatingGame position={[-4, -2, -2]} color="#8b5cf6" text="Laser Tag" />
      <FloatingGame position={[4, -2, -2]} color="#f59e0b" text="Mini Golf" />
      
      {/* Floating Products */}
      <FloatingProduct position={[-6, 0, -4]} color="#ef4444" />
      <FloatingProduct position={[6, 0, -4]} color="#f97316" />
      <FloatingProduct position={[0, 4, -4]} color="#eab308" />
      <FloatingProduct position={[0, -4, -4]} color="#10b981" />
      
      {/* Background elements */}
      {Array.from({ length: 20 }, (_, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
          <Sphere 
            position={[
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 30 - 10
            ]} 
            args={[0.1, 16, 16]}
          >
            <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

export default function Scene3D() {
  console.log('Scene3D component rendering')
  
  // Test WebGL support
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  
  if (!gl) {
    console.error('WebGL not supported')
    throw new Error('WebGL not supported')
  }
  
  console.log('WebGL is supported, proceeding with 3D scene')

  return (
    <div className="h-screen w-full">
      <Canvas 
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 75 }}
        onCreated={(state) => {
          console.log('Canvas created successfully', state.gl.getParameter(state.gl.VERSION))
        }}
        onError={(error) => {
          console.error('Canvas creation error:', error)
          throw error
        }}
      >
        <Suspense fallback={null}>
          <Scene3DContent />
        </Suspense>
      </Canvas>
      
      {/* 3D UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 text-white">
          <p className="text-sm opacity-80">Click and drag to explore • Scroll to zoom</p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            Enter 3D World
          </button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-4 pointer-events-auto">
          <button className="block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Games
          </button>
          <button className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Products
          </button>
          <button className="block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
            Events
          </button>
          <button className="block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
