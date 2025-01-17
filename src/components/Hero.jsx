// src/components/Hero.jsx
import React from 'react';


const Hero = () => {
  return (
    <section className="h-[100vh] flex flex-col md:flex-row">
      {/* First Section: Avatar and Name */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center md:w-1/3 p-10 flex flex-col items-center justify-center relative">
  
  <img
    src="/portfolio/images/logo.jpg"
    alt="Avatar"
    className="w-[300px] h-[300px] mt-28 rounded-full border-4 border-white  md:mt-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 transition-all duration-300"
  />
  <h1 className="text-4xl text-center font-extrabold md:mt-[400px] text-white z-10 mt-4">Rajesh Ravi</h1>
</div>


      {/* Second Section: Intro and Button */}
      <div className="bg-gradient-to-r from-gray-800 to-black text-white text-center md:w-2/3 p-10 flex flex-col items-center justify-center md:items-start transition-all duration-300">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg max-w-lg mx-auto md:text-left">
          I am Rajesh, a passionate developer working towards mastering technologies. This is where I showcase my work, projects, and skills.
        </p>
        <a
          href="/portfolio/images/resume.pdf"  // Path to your resume in the public folder
          download="resume.pdf"
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors duration-300 inline-block"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};
//"homepage": "https://saturosukuna.github.io/Rajportfolio",
  //"predeploy": "npm run build",
    //"deploy": "gh-pages -d dist"
export default Hero;
