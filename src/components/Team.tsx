import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Ndlovu',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'With over 15 years of experience in AI and machine learning, Dr. Ndlovu leads Azania AI\'s mission to democratize AI across Africa.',
    linkedin: '#',
    email: 'sarah@azaniaai.com'
  },
  {
    name: 'Michael Okonjo',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'A pioneer in ethical AI development, Michael brings extensive experience in building scalable AI solutions for African businesses.',
    linkedin: '#',
    email: 'michael@azaniaai.com'
  },
  {
    name: 'Dr. Amara Diallo',
    role: 'Chief Research Officer',
    image: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Leading our research initiatives, Dr. Diallo focuses on developing AI solutions that address unique African challenges.',
    linkedin: '#',
    email: 'amara@azaniaai.com'
  },
  {
    name: 'David Mensah',
    role: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'David ensures smooth operations and delivery of our AI solutions while maintaining our commitment to ethical practices.',
    linkedin: '#',
    email: 'david@azaniaai.com'
  }
];

export default function Team() {
  return (
    <div id="team" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the visionaries driving Africa's AI revolution with expertise, innovation, and ethical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}