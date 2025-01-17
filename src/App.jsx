// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Address from './components/Address';



const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Address />
      </main>
    </div>
  );
};

export default App;