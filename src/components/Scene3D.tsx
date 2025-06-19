
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'
import Scene3DContent from './scene3d/Scene3DContent'
import UIOverlay from './scene3d/UIOverlay'

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
      
      <UIOverlay />
    </div>
  )
}
