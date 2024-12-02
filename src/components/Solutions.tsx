import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { solutions } from '../data/solutions';
import SolutionDetails from './SolutionDetails';

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <div id="solutions" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Solutions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform African businesses and organizations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <solution.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
              <button 
                onClick={() => setSelectedSolution(solution)}
                className="mt-4 text-purple-400 hover:text-purple-300 flex items-center gap-2"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <SolutionDetails
        isOpen={selectedSolution !== null}
        onClose={() => setSelectedSolution(null)}
        solution={selectedSolution}
      />
    </div>
  );
}