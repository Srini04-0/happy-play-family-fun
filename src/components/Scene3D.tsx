
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Float, Sphere, Box, Environment, PerspectiveCamera, RoundedBox } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ProductShowcase({ position, color, title, subtitle }: { 
  position: [number, number, number], 
  color: string, 
  title: string,
  subtitle: string 
}) {
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

function HeroProduct() {
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

function BackgroundElements() {
  return (
    <>
      {Array.from({ length: 15 }, (_, i) => (
        <Float key={i} speed={0.2} rotationIntensity={0.05} floatIntensity={0.1}>
          <Sphere 
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 25 - 8
            ]} 
            args={[0.05, 16, 16]}
          >
            <meshStandardMaterial color="#f5f5f7" opacity={0.4} transparent />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

function Scene3DContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        enableRotate={true}
        maxDistance={15}
        minDistance={4}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        zoomSpeed={0.5}
      />
      
      <Environment preset="studio" />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      
      <HeroProduct />
      
      {/* Product Grid */}
      <ProductShowcase 
        position={[-4, 1, -2]} 
        color="#000000" 
        title="MacBook Pro" 
        subtitle="Supercharged by M3"
      />
      <ProductShowcase 
        position={[4, 1, -2]} 
        color="#f5f5f7" 
        title="iPad Pro" 
        subtitle="Thin. Light. Epic."
      />
      <ProductShowcase 
        position={[-4, -2, -2]} 
        color="#1d1d1f" 
        title="Apple Watch" 
        subtitle="Your essential companion"
      />
      <ProductShowcase 
        position={[4, -2, -2]} 
        color="#ff9500" 
        title="AirPods Pro" 
        subtitle="Adaptive Audio"
      />
      
      <BackgroundElements />
    </>
  )
}

export default function Scene3D() {
  console.log('Apple-style 3D scene rendering')

  return (
    <div className="h-screen w-full bg-white">
      <Canvas 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        onCreated={(state) => {
          console.log('Apple-style canvas created successfully')
        }}
      >
        <Suspense fallback={null}>
          <Scene3DContent />
        </Suspense>
      </Canvas>
      
      {/* Apple-style UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 pointer-events-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="text-xl font-semibold text-gray-900">🍎</div>
                <div className="hidden md:flex space-x-6">
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">Store</button>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">Mac</button>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">iPad</button>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">iPhone</button>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">Watch</button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">🔍</button>
                <button className="text-gray-600 hover:text-gray-900">🛍️</button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Hero Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
            Think Different
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            Discover our latest innovations in technology
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            Explore Products
          </button>
        </div>
        
        {/* Side Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 pointer-events-auto">
          {['iPhone', 'MacBook', 'iPad', 'Watch', 'AirPods'].map((product, index) => (
            <button 
              key={product}
              className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-600 transition-colors"
              title={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
