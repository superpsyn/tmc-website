import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-32 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4">
        {/* Logo and Social Icons Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Tech Masters Connect</h1>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-2xl hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="text-2xl hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="mailto:techmastersconnect@gmail.com" aria-label="Email" className="text-2xl hover:text-red-500">
              <FaEnvelope />
            </a>
          </div>
          <div className="flex mt-4 space-x-4">
            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/resources">Resources</a>
            <a href="/">Blog</a>
            <a href="/contact">Contact</a>
          </div>

        </div>

        {/* Description Section */}
        <div className="md:flex-1 md:px-8 mb-8 md:mb-0 max-w-2xl mx-auto md:mx-0">
          <p className="text-sm text-justify">
            We are a thriving community of IT graduate students committed to connecting, collaborating, and innovating. Our organization is a hub for academic excellence, professional development, and technological exploration. Through expert sessions, mentorship, research opportunities, and hands-on projects, we provide our members with the tools and networks they need to succeed. Together, we build bridges to the future, supporting each other in achieving our goals and transforming the IT landscape.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;