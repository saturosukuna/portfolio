import React, { useRef, useEffect } from 'react';
import { FaJsSquare,  FaNodeJs, FaHtml5, FaCss3Alt, FaJava,  FaDocker } from 'react-icons/fa';  // Import logos from react-icons
import { SiTailwindcss, SiMongodb, SiExpress,  SiEthereum,   SiBootstrap, SiFigma, SiMysql, SiOracle } from 'react-icons/si'; // More logos

const Skills = () => {
  const skills = [
    { name: 'JavaScript', logo: <FaJsSquare className="text-4xl text-yellow-500" /> },
    { name: 'React', logo: <iconify-icon icon="logos:react" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Node.js', logo: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: 'HTML5', logo: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', logo: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'Java', logo: <FaJava className="text-4xl text-red-600" /> },
    { name: 'Python', logo: <iconify-icon icon="logos:python" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Git', logo: <iconify-icon icon="logos:git-icon" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Github', logo: <iconify-icon icon="logos:github-icon" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Docker', logo: <FaDocker className="text-4xl text-blue-400" /> },
    { name: 'MongoDB', logo: <SiMongodb className="text-4xl text-green-600" /> },
    { name: 'Express', logo: <SiExpress className="text-4xl text-black" /> },
    { name: 'TailwindCSS', logo: <SiTailwindcss className="text-4xl text-sky-400" /> },
    { name: 'C++', logo: <iconify-icon icon="logos:c-plusplus" width="32" height="32" noobserver></iconify-icon> },
    { name: 'C#', logo: <iconify-icon icon="logos:c-sharp" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Web3', logo: <iconify-icon icon="logos:web3js" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Ethereum', logo: <SiEthereum className="text-4xl text-indigo-600" /> },
    { name: 'Solidity', logo: <iconify-icon icon="logos:solidity" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Metamask', logo: <iconify-icon icon="logos:metamask-icon" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Ganache', logo: <iconify-icon icon="logos:ganache-icon" width="32" height="32" noobserver></iconify-icon> },
    { name: 'Truffle', logo: <iconify-icon icon="logos:truffle-icon" width="32" height="32" noobserver></iconify-icon> },
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
    <section id="skills" className="scroll-mt-20 mt-4 p-10 bg-indigo-800 ">
      <h2 className="text-3xl text-white font-serif font-extrabold text-center mb-6">Skills</h2>
      <p class="text-lg text-white py-2 dark:text-gray-300 font-medium leading-relaxed">
  I have expertise in the MERN stack, blockchain development, and logical programming. With a strong foundation in MongoDB, Express, React, and Node.js, I build scalable web applications. My blockchain knowledge includes smart contract development using Solidity and Web3. My logical thinking skills enable me to write efficient and optimized code for problem-solving and software development.
</p>

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
