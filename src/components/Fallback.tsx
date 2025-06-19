
export default function Fallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">HAPPY 2 PLAY</h1>
        <p className="text-xl mb-8">Your browser doesn't support 3D graphics</p>
        <button className="bg-white text-red-500 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
          View 2D Version
        </button>
      </div>
    </div>
  )
}
