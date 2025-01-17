import React, { useRef, useEffect } from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa';  // Import logos from react-icons
import { SiTailwindcss, SiMongodb, SiExpress, SiGraphql, SiEthereum,   SiBootstrap, SiFigma, SiMysql, SiOracle } from 'react-icons/si'; // More logos

const Skills = () => {
  const skills = [
    { name: 'JavaScript', logo: <FaJsSquare className="text-4xl text-yellow-500" /> },
    { name: 'React', logo: <FaReact className="text-4xl text-cyan-500" /> },
    { name: 'Node.js', logo: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: 'HTML5', logo: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', logo: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'Java', logo: <FaJava className="text-4xl text-red-600" /> },
    { name: 'Python', logo: <FaPython className="text-4xl text-blue-400" /> },
    { name: 'Git', logo: <FaGitAlt className="text-4xl text-gray-800" /> },
    { name: 'Docker', logo: <FaDocker className="text-4xl text-blue-400" /> },
    { name: 'MongoDB', logo: <SiMongodb className="text-4xl text-green-600" /> },
    { name: 'Express', logo: <SiExpress className="text-4xl text-black" /> },
    { name: 'TailwindCSS', logo: <SiTailwindcss className="text-4xl text-sky-400" /> },
    { name: 'GraphQL', logo: <SiGraphql className="text-4xl text-pink-500" /> },
    { name: 'Ethereum', logo: <SiEthereum className="text-4xl text-indigo-600" /> },
    
    { name: 'Bootstrap', logo: <SiBootstrap className="text-4xl text-purple-600" /> },
    { name: 'MySQL', logo: <SiMysql className="text-4xl text-blue-700" /> },
    { name: 'Oracle', logo: <SiOracle className="text-4xl text-red-500" /> },
    { name: 'Figma', logo: <SiFigma className="text-4xl text-purple-500" /> },
  ];

  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollSpeed = 1; // Control scrolling speed

    // Scroll function
    const scroll = () => {
      container.scrollLeft += scrollSpeed; // Scroll to the right
      // Once the scroll reaches the end, reset to the beginning for a continuous loop
      if (container.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      requestAnimationFrame(scroll); // Continue scrolling
    };

    scroll(); // Start scrolling animation

    return () => {
      cancelAnimationFrame(scroll); // Cleanup on unmount
    };
  }, []);

  return (
    <section id="skills" className="mt-4 p-10 bg-indigo-800 overflow-hidden">
      <h2 className="text-3xl text-white font-serif font-extrabold text-center mb-6">Skills</h2>
      <div
        ref={containerRef}
        className="relative flex overflow-x-hidden whitespace-nowrap"
        style={{ height: '120px' }}
      >
        <div ref={scrollRef} className="flex">
          {/* Duplicate the array to create a seamless scroll effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6 px-5 cursor-pointer text-center bg-zinc-50 rounded-lg"
              style={{ minWidth: '100px',minHeight:'100px' }}
            >
              <div className="text-center">{skill.logo}</div>
              <p className="mt-2 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
