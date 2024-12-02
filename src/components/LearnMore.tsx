import React from 'react';
import { X, Check } from 'lucide-react';

interface LearnMoreProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LearnMore({ isOpen, onClose }: LearnMoreProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">About Azania AI</h2>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300">
              Azania AI is dedicated to democratizing artificial intelligence across Africa, ensuring that every individual, business, and organization can harness the power of AI in an ethical and responsible manner.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Why Choose Us?</h3>
            <div className="space-y-3">
              {[
                'African-focused solutions for local challenges',
                'Ethical AI development and deployment',
                'Comprehensive training and support',
                'Scalable solutions for businesses of all sizes',
                'Integration with existing systems',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Our Approach</h3>
            <p className="text-gray-300">
              We combine cutting-edge AI technology with deep understanding of African markets and culture. Our solutions are built on the principle of Ubuntu, emphasizing community, collaboration, and shared progress.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}