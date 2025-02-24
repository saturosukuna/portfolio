// src/components/Projects.jsx
import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
const Projects = () => {
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
  const projects = [
    {
      title: 'Decentralized Identity Management System',
      description: `
        This system leverages blockchain technology to securely manage identity, ensuring transparency and data integrity. It features three roles:
        
        Admin: Responsible for entering, validating, and viewing teachers' and students' data.
        Teacher & Student: Restricted to viewing only their respective data records.
        
        Data Structure: 
        - Student: Name, Age, DOB, Aadhaar, 10th Cert No, 12th Cert No, Dept, Father's Name, Mother's Name, Occupation, Email, Phone No, Roll No, Registration No, Blockchain Address.
        - Teacher: Includes all student data plus Experience and Degree No.
        
        Tech Stack: Truffle, Web3, Solidity, Ganache, Metamask, React, TailwindCSS.
        
        Software Requirements: Node.js, Ganache, Metamask, Truffle, Visual Studio Code, React.
        Hardware Requirements: Minimum 4 GB RAM (8 GB recommended), Multi-core processor, Internet connection, Compatible web browser (Chrome/Firefox).
      `,
    },
    {
      title: 'Nearby Share System using Flask',
      description: `
        A file-sharing application designed to simplify file transfers between mobile and laptop devices over LAN. When connected via a hotspot, it creates a local network to facilitate seamless sharing.

        Tech Stack: Flask (Backend), Python, HTML, CSS, JavaScript (Frontend).

        Software Requirements: Python 3.x, Flask framework, Web browser (for accessing the interface), Text editor (e.g., Visual Studio Code).
        
        Hardware Requirements: Devices capable of creating/joining a hotspot, Minimum 2 GB RAM, Basic network card/WiFi adapter.
        
        This application eliminates dependency on external networks, making file sharing efficient and secure within a localized environment.
      `,
    },
    {
      title: 'Flutter Chatbot app with Gemini Ai API',
      description: `
        It will get inputs through text and voice, And get the response using gemini api, but it will more likely answer like a english tutor. And the response will read aloud by a flutter tts and the users voice actually capured by speach to text module in flutter.`,
    },
    {
      title: "Rajify music app with React",
      description: `Rajify lets you explore and stream music effortlessly by fetching random songs from YouTube. Search for any track, create playlists, and enjoy a seamless audio experience with a sleek, Spotify-like UI. No downloads—just pure music streaming! using Youtube Api data v3, I managed to create this application,check out:[https://saturosukuna.github.io/Rajify]`,
    },
    
  ];

  return (
    <section data-aos="fade-up" id="projects" className="scroll-mt-20 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-green-600 text-center mb-8">Projects</h2>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div  data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom">
          <div 
          key={index}
          className="bg-white p-6 rounded-lg text-indigo-800 shadow-lg hover:shadow-xl 
                     transition-all duration-300 
                     hover:scale-90 hover:bg-blue-600 hover:text-white hover:rotate-[1deg]"
        >
        
            <h3 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h3>
            <p className="text-justify  leading-relaxed">{project.description}</p>
          </div>
          </div>
        ))}
      </div>
      <div class="flex flex-col items-center space-y-6 p-6 bg-gray-100  rounded-lg shadow-lg">
     
        
  
  <div data-aos="zoom-in" className="w-full  p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl py-4 font-semibold text-gray-800 dark:text-gray-200 text-center">Flowchart For My Blockchain Project</h2>
    <img src="/portfolio/images/uml.png" alt="Flowchart" className="w-full rounded-lg shadow-md border border-gray-300 dark:border-gray-700"/>
  </div>
  <div data-aos="zoom-in" className="w-full  p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl py-4 font-semibold text-gray-800 dark:text-gray-200 text-center">Rajify Website</h2>
    <img src="/portfolio/images/Rajify.png" alt="Flowchart" className="w-full rounded-lg shadow-md border border-gray-300 dark:border-gray-700"/>
    <a
          href="https://saturosukuna.github.io/Rajify"  // Path to your resume in the public folder
          className="mt-6 mx-5 text-white flex flex-col items-center justify-center p-2 bg-indigo-600 rounded 
                    shadow-lg shadow-blue-500/50 ring-2 ring-blue-400 
                    hover:shadow-pink-500 hover:ring-blue-500 hover:scale-105 
                    transition-all duration-300"
        >
          Go to Rajify
        </a>
  </div>

  <div data-aos="zoom-in" className="w-full flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl py-4 font-semibold text-gray-800 dark:text-gray-200 text-center">
        Voicebot App with Audio
    </h2>

    {/* Mobile Frame */}
    <div className="relative p-2 bg-gray-900 rounded-2xl border-4 border-gray-700 shadow-lg w-[230px]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg"></div>
        
        {/* Screenshot */}
        <img 
            src="/portfolio/images/voicebot.jpg" 
            alt="Voicebot App" 
            className="w-full rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
        />
    </div>

    {/* Download Button */}
    <a
        href="/portfolio/images/voicebot.apk"
        download="voicebot.apk"
        className="mt-6 text-white flex items-center justify-center px-4 py-2 bg-indigo-600 rounded-lg 
                   shadow-lg shadow-blue-500/50 ring-2 ring-blue-400 
                   hover:shadow-red-500 hover:ring-blue-500 hover:scale-105 
                   transition-all duration-300"
    >
        📥 Download Voicebot App
    </a>
</div>


</div>

      
      
    </section>
  );
};

export default Projects;


