import React from 'react';
import { Brain, Twitter, Linkedin, Github, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-xl">Azania AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Africa through ethical AI solutions grounded in Ubuntu philosophy.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@azaniaai.com" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">Solutions</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Johannesburg, South Africa</li>
              <li>contact@azaniaai.com</li>
              <li>+27 (0) 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Azania AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}