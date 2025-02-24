// src/components/About.jsx
import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once - while scrolling down
        offset: 100, // Offset (in px) from the original trigger point
      });
    });
  }, []);
  return (
    <section id="about" data-aos="fade-up" data-aos-anchor-placement="top-center" className="scroll-mt-14 mt-24 md:mt-2 p-8 text-justify bg-gradient-to-r from-gray-800 to-gray-700 text-white  rounded-lg shadow-lg">
      <h2 className="text-2xl p-6 text-indigo-600 font-bold text-center mb-4">About Me</h2>
      <p className="text-lg">
        Hello! I am Rajesh from Tamil Nadu, India, and I am passionate about technology and innovation. I am currently pursuing my Bachelor's in Information Technology at Annamalai University, set to graduate in 2025.
      </p>
      <p className="text-lg mt-4">
        With a strong foundation in logical thinking, I have gained hands-on experience in a wide range of technologies, including deep learning, blockchain, networking, web development, software development, and animations. I am particularly focused on becoming a proficient MERN stack developer.
      </p>
      <p className="text-lg mt-4">
        Currently, I am working on a Decentralized Identity Management System that utilizes blockchain technologies like Truffle, Ganache, Metamask, Web3, Ether, Solidity, and the MERN stack, combined with the power of TailwindCSS.
      </p>
      <p className="text-lg mt-4">
        As for my language skills, I am proficient in both English and Tamil. I am always eager to learn and stay up-to-date with the latest advancements in technology.
      </p>
      <p className="text-lg mt-4">
        My skills and expertise are showcased in the Skills section, where you can find more details about my knowledge in various tech domains.
      </p>
    </section>
  );
};

export default About;
