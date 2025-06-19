
export default function UIOverlay() {
  return (
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
  )
}
