import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Address = () => {
  const address = "Thiruppanazhuar Street, Srimushnam, Tamil Nadu, India - 608703";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;

  return (
    <section id="address" className="scroll-mt-14 p-6 bg-gray-600 border-gray-100 border-4 font-extrabold text-white font-mono my-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white-600 text-center mb-6">Address</h2>
      
      {/* Google Map Embed */}
      <div className="mb-6 rounded-lg overflow-hidden border-2 border-gray-300">
        <iframe
          title="Location Map"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(address)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        >
        </iframe>
      </div>

      <p className="text-center mb-4">
        {address}
      </p>

      {/* Contact Information */}
      <div className="text-center mb-6">
        <p>Email: <a href="mailto:rajeshravi67796@gmail.com" className="text-blue-500 hover:underline">rajeshravi67796@gmail.com</a></p>
        <p>Phone: <a href="tel:+918883761709" className="text-blue-500 hover:underline">+91 8883761709</a></p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center bg-white rounded-lg py-2 space-x-6">
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