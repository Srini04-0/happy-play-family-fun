
export default function Fallback() {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-6xl mb-6">🍎</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          3D Experience Unavailable
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Your browser may not support WebGL or 3D graphics.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Try updating your browser or enabling hardware acceleration for the best experience.
        </p>
        <div className="space-y-4">
          <button 
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 mr-4"
          >
            Try Again
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            Continue to Website
          </button>
        </div>
      </div>
    </div>
  )
}
