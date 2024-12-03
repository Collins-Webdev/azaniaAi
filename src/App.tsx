import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Team from './components/Team';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinWaitlist from './components/JoinWaitlist';
import LearnMore from './components/LearnMore';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      <Hero
        onJoinWaitlist={() => setIsWaitlistOpen(true)}
        onLearnMore={() => setIsLearnMoreOpen(true)}
      />
      <Solutions />
      <About />
      <Team />
      <BlogPreview />
      <Contact />
      <Footer />
      <JoinWaitlist isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <LearnMore isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </div>
  );
}

export default App;
