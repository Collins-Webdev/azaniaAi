import React from 'react';
import { Menu, X, Brain } from 'lucide-react';

interface NavbarProps {
  onJoinWaitlist: () => void;
}

export default function Navbar({ onJoinWaitlist }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-purple-500" />
                <span className="text-white font-bold text-xl">Azania AI</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#solutions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <button 
                onClick={onJoinWaitlist}
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#solutions" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button 
              onClick={onJoinWaitlist}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}