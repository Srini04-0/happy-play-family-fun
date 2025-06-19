
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Scene3D from './Scene3D'
import Fallback from './Fallback'

function Loading() {
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

export default function Scene3DWrapper() {
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
