import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
  onLearnMore: () => void;
}

export default function Hero({ onJoinWaitlist, onLearnMore }: HeroProps) {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Empowering Africa Through Ethical AI
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join us in revolutionizing African technology with safe, secure, and ethical AI solutions grounded in Ubuntu philosophy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onJoinWaitlist}
              className="px-8 py-4 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              Join Waitlist <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={onLearnMore}
              className="px-8 py-4 bg-white/10 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}