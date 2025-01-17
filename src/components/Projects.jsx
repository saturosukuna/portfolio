// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
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
  ];

  return (
    <section id="projects" className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-green-600 text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h3>
            <p className="text-justify text-indigo-800 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
