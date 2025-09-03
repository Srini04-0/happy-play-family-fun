import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Zap, Users, Trophy, Clock, TrendingUp, GraduationCap, Heart, Star, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gaming-green/20 via-transparent to-gaming-green/10" />
        </div>
        
        <div className="text-center z-10 max-w-6xl mx-auto">
          <h1 
            className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black tracking-tight leading-none mb-8"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="text-white animate-gaming-glow">HAPPY2PLAY</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 px-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Enter a world where fun never ends! Challenge your friends, master epic games, and unlock achievements in the most exciting family entertainment center in town!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gaming-green hover:bg-gaming-green-glow text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300">
              <Zap className="w-5 h-5 mr-2" />
              Start Playing
            </Button>
            <Button size="lg" variant="outline" className="border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300">
              <Gamepad2 className="w-5 h-5 mr-2" />
              Explore Games
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gaming-card border-gaming-border hover:border-gaming-green transition-all duration-300 animate-card-glow">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-black text-gaming-green mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>∞</div>
                <h3 className="text-2xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Fun Levels</h3>
                <p className="text-gray-400">Unlimited excitement</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-card border-gaming-border hover:border-gaming-green transition-all duration-300 animate-card-glow">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-black text-gaming-green mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>10+</div>
                <h3 className="text-2xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Epic Games</h3>
                <p className="text-gray-400">Thrilling adventures</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-card border-gaming-border hover:border-gaming-green transition-all duration-300 animate-card-glow">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-black text-gaming-green mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>100%</div>
                <h3 className="text-2xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Awesomeness</h3>
                <p className="text-gray-400">Pure entertainment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* About Us Content */}
            <div>
              <h2 className="text-5xl font-black text-white mb-8" style={{ fontFamily: 'Orbitron, monospace' }}>About Us</h2>
              <div className="space-y-6 text-gray-300" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                <p className="text-lg leading-relaxed">
                  Welcome to HAPPY2PLAY, where cutting-edge entertainment meets family fun! We're not just a gaming center – we're a lifestyle destination that brings people together through the power of play.
                </p>
                <p className="text-lg leading-relaxed">
                  Our state-of-the-art facility combines thrilling games, competitive sports, exciting events, and memorable experiences. Whether you're looking for an adrenaline rush or quality family time, we've got something special for everyone.
                </p>
                <p className="text-lg leading-relaxed">
                  From epic adventure challenges to skill-building activities, we create an environment where families bond, friends compete, and unforgettable memories are made every single day.
                </p>
              </div>
            </div>

            {/* Gaming Excellence Card */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gaming-card border-2 border-gaming-green rounded-full flex items-center justify-center mb-6 animate-card-glow">
                <Gamepad2 className="w-16 h-16 text-gaming-green" />
              </div>
              <h3 className="text-3xl font-bold text-gaming-green mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>Gaming Excellence</h3>
              <p className="text-gray-300 text-center text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Experience the future of entertainment with our cutting-edge gaming technology and immersive environments designed to thrill and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Games Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>Epic Games</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Choose your adventure and dive into worlds of excitement, challenge, and fun!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Adventure Land Boat Race */}
            <Card className="bg-gaming-card border-gaming-border hover:border-gaming-green transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gaming-green/30 transition-colors">
                  <Zap className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-2xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Adventure Land Boat Race</h3>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4">Medium</Badge>
                <p className="text-gray-300 mb-6">Navigate through thrilling water challenges and race against time!</p>
                <Button className="w-full bg-gaming-green hover:bg-gaming-green-glow text-white">Play Now</Button>
              </CardContent>
            </Card>

            {/* Dragon Walk */}
            <Card className="bg-gaming-card border-gaming-border hover:border-gaming-green transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gaming-green/30 transition-colors">
                  <Zap className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-2xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Dragon Walk</h3>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-4">Hard</Badge>
                <p className="text-gray-300 mb-6">Test your balance and courage on our legendary dragon path.</p>
                <Button className="w-full bg-gaming-green hover:bg-gaming-green-glow text-white">Play Now</Button>
              </CardContent>
            </Card>

            {/* Rope Play */}
            <Card className="bg-gaming-card border-gaming-border hover:border-gaming-green transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gaming-green/30 transition-colors">
                  <Users className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-2xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Rope Play</h3>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4">Medium</Badge>
                <p className="text-gray-300 mb-6">Climb, swing, and conquer our exciting rope adventure course.</p>
                <Button className="w-full bg-gaming-green hover:bg-gaming-green-glow text-white">Play Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-black text-gaming-green mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>500+</div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Happy Families</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-black text-gaming-green mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>24/7</div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Fun Available</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>Join Our Team</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Be part of something amazing! We're looking for passionate individuals who want to create unforgettable experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Flexible Hours */}
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Flexible Hours</h3>
                <p className="text-gray-300">Work schedules that fit your lifestyle and commitments.</p>
              </CardContent>
            </Card>

            {/* Growth Opportunities */}
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Growth Opportunities</h3>
                <p className="text-gray-300">Advance your career with comprehensive training and development.</p>
              </CardContent>
            </Card>

            {/* Student Friendly */}
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Student Friendly</h3>
                <p className="text-gray-300">Perfect for students looking for part-time opportunities.</p>
              </CardContent>
            </Card>

            {/* Fun Environment */}
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Fun Environment</h3>
                <p className="text-gray-300">Work in an exciting, energetic, and positive atmosphere.</p>
              </CardContent>
            </Card>

            {/* Team Spirit */}
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Team Spirit</h3>
                <p className="text-gray-300">Join a supportive team that values collaboration and friendship.</p>
              </CardContent>
            </Card>

            {/* Competitive Pay */}
            <Card className="bg-gaming-card border-gaming-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Competitive Pay</h3>
                <p className="text-gray-300">Excellent compensation packages with performance bonuses.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-gaming-green mb-6 animate-gaming-glow" style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Join the HAPPY2PLAY family and help us create magical moments for everyone!
          </p>
          <Button size="lg" className="bg-gaming-green hover:bg-gaming-green-glow text-white font-bold text-xl px-12 py-4 rounded-lg">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Gaming Gear Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>Gaming Gear</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Exclusive HAPPY2PLAY merchandise and gaming accessories are on their way! Be the first to get your hands on our premium collection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Gaming Shoes */}
            <Card className="bg-gaming-card border-gaming-border relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gaming-green text-white">Coming Soon</Badge>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>Gaming Shoes</h3>
                <p className="text-gray-300 mb-6">High-performance footwear designed for ultimate gaming comfort.</p>
                <Button variant="outline" className="border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-white">
                  Notify Me
                </Button>
              </CardContent>
            </Card>

            {/* HAPPY2PLAY Keychains */}
            <Card className="bg-gaming-card border-gaming-border relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gaming-green text-white">Coming Soon</Badge>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>HAPPY2PLAY Keychains</h3>
                <p className="text-gray-300 mb-6">Collectible keychains featuring your favorite game characters.</p>
                <Button variant="outline" className="border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-white">
                  Notify Me
                </Button>
              </CardContent>
            </Card>

            {/* Premium Gaming Jackets */}
            <Card className="bg-gaming-card border-gaming-border relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gaming-green text-white">Coming Soon</Badge>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>Premium Gaming Jackets</h3>
                <p className="text-gray-300 mb-6">Stylish jackets that show your gaming pride in comfort.</p>
                <Button variant="outline" className="border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-white">
                  Notify Me
                </Button>
              </CardContent>
            </Card>

            {/* Achievement Badges */}
            <Card className="bg-gaming-card border-gaming-border relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gaming-green text-white">Coming Soon</Badge>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-gaming-green" />
                </div>
                <h3 className="text-xl font-bold text-gaming-green mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>Achievement Badges</h3>
                <p className="text-gray-300 mb-6">Physical badges to commemorate your gaming accomplishments.</p>
                <Button variant="outline" className="border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-white">
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>Stay Updated</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Subscribe to get notified when our exclusive gaming merchandise launches!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;