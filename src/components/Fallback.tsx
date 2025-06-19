
export default function Fallback() {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center">
      <div className="text-center text-white max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">HAPPY 2 PLAY</h1>
        <p className="text-xl mb-4">3D Experience Unavailable</p>
        <p className="text-sm mb-8 opacity-90">
          Your browser may not support WebGL or 3D graphics. 
          Try updating your browser or enabling hardware acceleration.
        </p>
        <div className="space-y-4">
          <button 
            onClick={handleRetry}
            className="bg-white text-red-500 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform mr-4"
          >
            Try Again
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-red-500 transition-colors">
            View 2D Version
          </button>
        </div>
      </div>
    </div>
  )
}
