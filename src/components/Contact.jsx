// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user_name: name,    // Matches placeholder in your template
      user_email: email,  // Matches placeholder in your template
      user_message: message, // Matches placeholder in your template
    };

    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    emailjs.send(serviceId, templateId, formData, userId)
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message');
        }
      );
  };

  return (
    <section id="contact" className="p-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Me</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
          <input
            type="text"
            id="name"
            className="block w-full p-1 mt-2 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
          <input
            type="email"
            id="email"
            className="block w-full p-1 mt-2 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
          <textarea
            id="message"
            className="block w-full p-1 mt-2 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-extrabold  py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-xl">{status}</p>}
    </section>
  );
};

export default Contact;
