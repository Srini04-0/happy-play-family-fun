import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-300/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-emerald-300/10 to-teal-300/10 rounded-full animate-bounce"></div>
      
      {/* Left Aligned Content */}
      <div className="flex items-center min-h-screen pl-8 md:pl-16 lg:pl-24">
        <div className="max-w-lg">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black mb-2 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-6"></div>
          </div>
          
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-relaxed">
            Oops! Game Over
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            This page seems to have wandered off into the void.
            <br />
            Let's get you back to the fun!
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
          >
            Return to Happy2Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
