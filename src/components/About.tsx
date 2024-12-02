import React from 'react';
import { Shield, Users, Lightbulb, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Ethical AI',
    description: 'We prioritize responsible AI development that respects privacy and promotes fairness.'
  },
  {
    icon: Users,
    title: 'Ubuntu Philosophy',
    description: 'Our solutions are built on the African principle of ubuntu - "I am because we are."'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries while maintaining our commitment to ethical practices.'
  },
  {
    icon: Globe,
    title: 'African-Centric',
    description: 'Solutions designed specifically for African challenges and opportunities.'
  }
];

export default function About() {
  return (
    <div id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Azania AI</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're on a mission to democratize AI technology across Africa, ensuring every individual and business can harness its power responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-900/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <value.icon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To create an Africa where AI technology is accessible, ethical, and beneficial to all, driving innovation and economic growth while preserving our cultural values.
              </p>
              <p className="text-gray-300">
                We believe in building AI solutions that not only solve technical challenges but also contribute to the social and economic development of African communities.
              </p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}