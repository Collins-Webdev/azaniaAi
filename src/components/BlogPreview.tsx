import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI in Africa',
    excerpt: 'Exploring how artificial intelligence is transforming African businesses and communities.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    readTime: '5 min read'
  },
  {
    title: 'Ubuntu Philosophy in AI Development',
    excerpt: 'How African values are shaping the development of ethical AI solutions.',
    image: 'https://images.unsplash.com/photo-1622295023825-6e319464b810?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Ethics',
    readTime: '4 min read'
  },
  {
    title: 'AI Education: Empowering the Next Generation',
    excerpt: 'Building capacity for AI development across the continent.',
    image: 'https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Education',
    readTime: '6 min read'
  }
];

export default function BlogPreview() {
  return (
    <div id="blog" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest thoughts on AI, technology, and innovation in Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-purple-400 text-sm">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
            Visit Our Blog <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}