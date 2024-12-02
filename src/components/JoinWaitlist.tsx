import React, { useState } from 'react';
import { X } from 'lucide-react';

interface JoinWaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinWaitlist({ isOpen, onClose }: JoinWaitlistProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log('Waitlist submission:', email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
          <p className="text-gray-400">
            Be among the first to experience the future of AI in Africa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="waitlist-email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Join Waitlist
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          By joining, you agree to receive updates about Azania AI.
        </p>
      </div>
    </div>
  );
}