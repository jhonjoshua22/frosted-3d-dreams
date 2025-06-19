
import { useEffect, useState } from 'react';
import LanyardBadge from './LanyardBadge';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            filter: 'blur(8px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-bg/50 to-dark-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-gradient animate-glow-pulse">
            Jhon Joshua Abutan
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            <span className="text-neon-cyan">Front-End Developer</span> | 
            <span className="text-bright-purple"> UI/UX Designer</span> | 
            <span className="text-neon-cyan"> Social Media Manager</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="glass-card rounded-2xl p-8 max-w-md">
              <p className="text-gray-300 leading-relaxed">
                Crafting digital experiences with cutting-edge technology and creative design. 
                Passionate about bringing ideas to life through code and visual storytelling.
              </p>
            </div>
            
            {/* Interactive Lanyard */}
            <div className="flex-shrink-0">
              <LanyardBadge />
            </div>
          </div>

          <div className="mt-12">
            <button className="interactive glass-card hover:purple-glow px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105">
              <span className="text-gradient">Explore My Work</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
