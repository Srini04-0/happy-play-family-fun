
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Scene3D from './Scene3D'
import Fallback from './Fallback'

function Loading() {
  console.log('Loading Apple-style 3D scene...')
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-gray-600 font-medium">Loading Experience...</p>
      </div>
    </div>
  )
}

function ErrorFallback({ error }: { error: Error }) {
  console.error('3D Scene Error:', error)
  return <Fallback />
}

// Simplified WebGL check
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    
    if (!gl) {
      console.warn('WebGL not available')
      return false
    }
    
    console.log('WebGL support confirmed')
    return true
  } catch (error) {
    console.error('WebGL check failed:', error)
    return false
  }
}

export default function Scene3DWrapper() {
  console.log('Apple-style Scene3DWrapper rendering')
  
  if (!checkWebGLSupport()) {
    console.log('WebGL not supported, showing fallback')
    return <Fallback />
  }

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Apple 3D Scene Error:', error, errorInfo)
      }}
    >
      <Suspense fallback={<Loading />}>
        <Scene3D />
      </Suspense>
    </ErrorBoundary>
  )
}
