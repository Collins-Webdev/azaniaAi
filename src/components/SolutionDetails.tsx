import React from 'react';
import { X, Check } from 'lucide-react';

interface SolutionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  solution: {
    title: string;
    description: string;
    benefits: string[];
    features: string[];
    useCases: string[];
  } | null;
}

export default function SolutionDetails({ isOpen, onClose, solution }: SolutionDetailsProps) {
  if (!isOpen || !solution) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">{solution.title}</h2>

        <div className="space-y-8">
          <section>
            <p className="text-gray-300 text-lg">{solution.description}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
            <div className="space-y-3">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
            <div className="space-y-3">
              {solution.useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.location.href = '#contact'}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}