import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about our AI solutions? We're here to help you transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">contact@azaniaai.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+27 (0) 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}