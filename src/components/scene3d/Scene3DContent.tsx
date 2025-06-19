
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import HeroProduct from './HeroProduct'
import ProductShowcase from './ProductShowcase'
import BackgroundElements from './BackgroundElements'

export default function Scene3DContent() {
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
