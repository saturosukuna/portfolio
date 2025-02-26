// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      user_name: name,      // Matches placeholder in your template
      user_email: email,    // Matches placeholder in your template
      user_message: message, // Matches placeholder in your template
    };
  
    try {
      const response = await fetch('https://emailserver-2vim.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log(result.message);
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error(result.error);
        setStatus('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message');
    }
  };
  return (
    <section id="contact" className="w-full scroll-mt-20 px-6 py-10 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded shadow-2xl">
  <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg">
    <h2 className="text-3xl font-extrabold text-white text-center mb-6">Contact Me</h2>
    
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-white">Your Name</label>
        <input
          type="text"
          id="name"
          className="block w-full p-3 mt-2 bg-white/20 text-white rounded-lg shadow-md focus:outline-none 
                     focus:ring-2 focus:ring-green-400 placeholder-gray-200 transition-all duration-300"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-white">Your Email</label>
        <input
          type="email"
          id="email"
          className="block w-full p-3 mt-2 bg-white/20 text-white rounded-lg shadow-md focus:outline-none 
                     focus:ring-2 focus:ring-green-400 placeholder-gray-200 transition-all duration-300"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-lg font-semibold text-white">Your Message</label>
        <textarea
          id="message"
          className="block w-full p-3 mt-2 bg-white/20 text-white rounded-lg shadow-md focus:outline-none 
                     focus:ring-2 focus:ring-green-400 placeholder-gray-200 transition-all duration-300 h-32 resize-none"
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-green-500 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-600 
                   transform hover:scale-105 transition-all duration-300"
      >
        Send Message
      </button>
    </form>

    {status && <p className="mt-4 text-center text-lg font-medium text-green-300">{status}</p>}
  </div>
</section>

  );
};

export default Contact;
