
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Scene3D from './Scene3D'
import Fallback from './Fallback'

function Loading() {
  console.log('Loading 3D scene...')
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-xl">Loading 3D Experience...</p>
      </div>
    </div>
  )
}

function ErrorFallback({ error }: { error: Error }) {
  console.error('3D Scene Error:', error)
  return <Fallback />
}

// Check WebGL support before rendering
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      console.warn('WebGL not available')
      return false
    }
    
    // Check for required extensions
    const requiredExtensions = ['OES_element_index_uint']
    for (const ext of requiredExtensions) {
      if (!gl.getExtension(ext)) {
        console.warn(`Required WebGL extension ${ext} not available`)
      }
    }
    
    console.log('WebGL support check passed')
    return true
  } catch (error) {
    console.error('WebGL support check failed:', error)
    return false
  }
}

export default function Scene3DWrapper() {
  console.log('Scene3DWrapper rendering')
  
  // If WebGL is not supported, show fallback immediately
  if (!checkWebGLSupport()) {
    console.log('WebGL not supported, showing fallback')
    return <Fallback />
  }

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('3D Error:', error, errorInfo)
      }}
    >
      <Suspense fallback={<Loading />}>
        <Scene3D />
      </Suspense>
    </ErrorBoundary>
  )
}
