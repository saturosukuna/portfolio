// src/components/Address.jsx
import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Address = () => {
  return (
    <section id="address" className="p-6 bg-gray-600 border-gray-100 border-4 font-extrabold text-white font-mono my-4 rounded-lg shadow-lg">
      {/* Address Section */}
      <h2 className="text-3xl font-bold text-white-600 text-center mb-6">Address</h2>
      <p className="text-center mb-4">
        Thiruppanazhuar Street, Srimushnam, Tamil Nadu, India - 608703
      </p>

      {/* Contact Information */}
      <div className="text-center mb-6">
        <p>Email: <a href="mailto:rajeshravi67796@gmail.com" className="text-blue-500 hover:underline">rajeshravi67796@gmail.com</a></p>
        <p>Phone: <a href="tel:+918883761709" className="text-blue-500 hover:underline">+91 8883761709</a></p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center bg-white  rounded-lg py-2 space-x-6">
        <a href="https://wa.me/918883761709" target="_blank" rel="noopener noreferrer" className="text-green-500 text-3xl hover:text-green-700">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/share/18BDtt4RDS/ " target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/rajeshravi332?igsh=bWFmbmpmY2ZtYmNi " target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:text-pink-700">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rajesh-ravi-22684130b/ " target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="https://github.com/saturosukuna" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-3xl hover:text-gray-900">
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Address;
