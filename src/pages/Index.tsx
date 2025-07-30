
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Users, Trophy, ShoppingBag, Gamepad2, Zap, Heart, Sparkles } from "lucide-react";

const Index = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, color: string}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)]
    }));
    setParticles(newParticles);
  }, []);

  const scrollToGames = () => {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 shadow-lg sticky top-0 z-50 border-b border-green-200/50 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>
                <Gamepad2 className="text-white w-6 h-6 relative z-10" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Happy2Play</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#jobs" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                Job Offer
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#games" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group">
                Games
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#products" className="text-gray-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Courses
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 text-gray-800 py-32 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: ['#86efac', '#6ee7b7', '#5eead4', '#7dd3fc', '#a78bfa'][Math.floor(Math.random() * 5)],
              animationDelay: `${particle.id * 0.2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Gaming Icons Floating */}
        <div className="absolute top-20 left-20 text-green-400 animate-bounce opacity-70">
          <Gamepad2 className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-32 text-emerald-400 animate-pulse opacity-60">
          <Zap className="w-10 h-10" />
        </div>
        <div className="absolute bottom-40 left-32 text-teal-400 animate-ping opacity-50">
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute bottom-60 right-20 text-cyan-400 animate-bounce delay-500 opacity-80">
          <Sparkles className="w-7 h-7" />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border-4 border-green-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full animate-bounce delay-700"></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Title with Gaming Effect */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight relative">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                  HAPPY2PLAY
                </span>
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent blur-lg opacity-20 animate-pulse">
                  HAPPY2PLAY
                </div>
              </h1>
            </div>
            
            {/* Visit Our Location Call-to-Action */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-green-200/50 shadow-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                🎯 Visit Our Amazing Location! 🎯
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                Experience the ultimate family fun destination! Our state-of-the-art entertainment center 
                features exciting games, interactive challenges, and unforgettable experiences for all ages.
              </p>
              <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Come discover why families choose Happy2Play as their go-to destination for quality time, 
                friendly competition, and creating lasting memories together.
              </p>
              
              {/* Location Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Interactive Games</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">Safe</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Family Environment</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">Open</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">7 Days a Week</div>
                </div>
              </div>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  VISIT US TODAY
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg" 
                onClick={scrollToGames}
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6" />
                  VIEW OUR GAMES
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">About Happy 2 Play</h2>
            <Card className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12 animate-fade-in-up animation-delay-200">
                <p className="text-lg text-gray-700 mb-6">
                  Happy 2 Play is a premier family entertainment center dedicated to bringing families together 
                  through fun, interactive experiences. Our physical location offers a variety of exciting games 
                  and activities designed for all ages.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  We believe that family time is precious, and we've created a space where parents and children 
                  can bond, compete, and create unforgettable memories together. From thrilling physical challenges 
                  to friendly competitions, we have something for everyone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center group animate-fade-in-up animation-delay-300">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float">
                      <Users className="text-red-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-red-500 transition-colors duration-300">Family Games</h3>
                    <p className="text-gray-600">Interactive games for all family members</p>
                  </div>
                  <div className="text-center group animate-fade-in-up animation-delay-400">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float animation-delay-200">
                      <Trophy className="text-blue-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors duration-300">Tournaments</h3>
                    <p className="text-gray-600">Regular family tournaments and competitions</p>
                  </div>
                  <div className="text-center group animate-fade-in-up animation-delay-500">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float animation-delay-300">
                      <ShoppingBag className="text-green-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-green-500 transition-colors duration-300">Products</h3>
                    <p className="text-gray-600">Premium products with subscription options</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Offer Section */}
      <section id="jobs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">Job Offers</h2>
            <Card className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12 animate-fade-in-up animation-delay-200">
                <p className="text-lg text-gray-700 mb-6">
                  Happy 2 Play offers exciting job opportunities for students who are looking for flexible work 
                  arrangements that fit around their educational needs. Whether you're taking a break from studies, 
                  pursuing part-time education, or just starting your college journey, we have positions for you.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  We understand that not everyone follows the traditional full-time study path. That's why we've 
                  created job opportunities specifically designed for students who have dropped out, are in their 
                  first or second year of college, or need flexible schedules to balance work and education.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="text-center group animate-fade-in-up animation-delay-300">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float">
                      <Clock className="text-purple-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-500 transition-colors duration-300">Flexible Hours</h3>
                    <p className="text-gray-600">Part-time positions with schedules that work around your studies and personal commitments</p>
                  </div>
                  <div className="text-center group animate-fade-in-up animation-delay-400">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float animation-delay-200">
                      <Star className="text-orange-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">Growth Opportunities</h3>
                    <p className="text-gray-600">Learn valuable skills in customer service, entertainment management, and team leadership</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">Our Exciting Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Land Boat Race */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 game-card-hover animate-fade-in-up animation-delay-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-blue-300 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-blue-700/50 text-white mb-2 hover:bg-blue-600/50 transition-colors duration-300">Adventure</Badge>
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">Land Boat Race</h3>
                  <p className="text-sm opacity-90">Navigate your land boat through exciting challenges</p>
                </div>
              </div>
            </Card>

            {/* Dragon Walk */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-red-500 to-red-600 text-white border-0 game-card-hover animate-fade-in-up animation-delay-200">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4 w-6 h-6 bg-red-300 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-red-700/50 text-white mb-2 hover:bg-red-600/50 transition-colors duration-300">Balance</Badge>
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">Dragon Walk</h3>
                  <p className="text-sm opacity-90">Test your balance and coordination skills</p>
                </div>
              </div>
            </Card>

            {/* Rope Play */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-green-500 to-green-600 text-white border-0 game-card-hover animate-fade-in-up animation-delay-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-3 right-3 w-4 h-4 bg-green-300 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-green-700/50 text-white mb-2 hover:bg-green-600/50 transition-colors duration-300">Climbing</Badge>
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">Rope Play</h3>
                  <p className="text-sm opacity-90">Climb, swing, and conquer rope challenges</p>
                </div>
              </div>
            </Card>

            {/* Dance for the Winner */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 game-card-hover animate-fade-in-up animation-delay-400">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-6 left-6 w-5 h-5 bg-purple-300 rounded-full animate-bounce delay-150 opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-purple-700/50 text-white mb-2 hover:bg-purple-600/50 transition-colors duration-300">Competition</Badge>
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">Dance for the Winner</h3>
                  <p className="text-sm opacity-90">Show off your moves in our dance competition</p>
                </div>
              </div>
            </Card>

            {/* Food Fest Competition */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 game-card-hover animate-fade-in-up animation-delay-500">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-5 right-5 w-6 h-6 bg-orange-300 rounded-full animate-spin opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-orange-700/50 text-white mb-2 hover:bg-orange-600/50 transition-colors duration-300">Food & Fun</Badge>
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">Food Fest Competition</h3>
                  <p className="text-sm opacity-90">Test your taste buds and win prizes</p>
                </div>
              </div>
            </Card>

            {/* All Games */}
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 game-card-hover animate-fade-in-up animation-delay-600">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
                <div className="text-center relative z-10">
                  <div className="text-4xl mb-4 animate-bounce">🎯</div>
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">And More!</h3>
                  <p className="text-sm opacity-90">Discover all our exciting activities</p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">Products</h2>
            <Card className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12 animate-fade-in-up animation-delay-200">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-gray-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We're working on bringing you amazing Happy 2 Play products including branded shoes, 
                    keychains, jackets, and more. Stay tuned for updates!
                  </p>
                  <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Notify Me When Available
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">Courses</h2>
            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <CardContent className="p-12 relative overflow-hidden">
                <div className="absolute top-4 left-4 w-8 h-8 bg-purple-300 rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-300 rounded-full animate-bounce opacity-70"></div>
                <div className="text-6xl mb-6 animate-bounce">🚀</div>
                <CardTitle className="text-3xl mb-4 hover:text-purple-600 transition-colors duration-300">Something Amazing is Coming Soon!</CardTitle>
                <CardDescription className="text-lg mb-8 text-gray-600">
                  We're working on exciting new courses that will take your family entertainment experience to the next level. 
                  Stay tuned for updates on our specialized training programs and skill-building workshops.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Notify Me
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transform hover:scale-110 transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-400 rounded-full animate-bounce opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Visit Our Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up animation-delay-200">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-red-400 transition-colors duration-300">Location</p>
                      <p className="text-gray-300">123 Family Fun Street, Entertainment District</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-red-400 transition-colors duration-300">Phone</p>
                      <p className="text-gray-300">(555) 123-PLAY</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-red-400 transition-colors duration-300">Hours</p>
                      <p className="text-gray-300">Mon-Sun: 10AM - 10PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-red-400 transition-colors duration-300">Rating</p>
                      <div className="flex items-center space-x-1">
                        <div className="flex text-yellow-400">
                          <Star className="w-4 h-4 fill-current animate-pulse" />
                          <Star className="w-4 h-4 fill-current animate-pulse delay-100" />
                          <Star className="w-4 h-4 fill-current animate-pulse delay-200" />
                          <Star className="w-4 h-4 fill-current animate-pulse delay-300" />
                          <Star className="w-4 h-4 fill-current animate-pulse delay-500" />
                        </div>
                        <span className="text-gray-300 text-sm">(4.9/5.0)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-up animation-delay-300">
                <h3 className="text-2xl font-bold mb-6">Ready to Play?</h3>
                <p className="text-gray-300 mb-6">
                  Come visit us for an unforgettable family experience! No reservations needed - just bring your 
                  family and get ready for hours of fun and excitement.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in-up">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300">
                <span className="text-white font-bold">H2P</span>
              </div>
              <span className="font-bold text-xl hover:text-red-400 transition-colors duration-300">Happy 2 Play</span>
            </div>
            <p className="text-gray-400 text-center md:text-right animate-fade-in-up animation-delay-200">© 2025 Happy 2 Play. All rights reserved. Creating family memories since day one.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
