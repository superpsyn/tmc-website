import React from 'react';
import { FaUserTie, FaLaptopCode, FaHandsHelping, FaNetworkWired, FaUsers, FaCertificate } from 'react-icons/fa';

const services = [
  {
    title: 'Connect with Leaders',
    description: 'Engage with industry experts to gain insights and mentorship opportunities.',
    icon: <FaUserTie className="text-4xl text-purple-900" />,
  },
  {
    title: 'Tech Hackathons',
    description: 'Participate in hackathons to innovate and collaborate on cutting-edge projects.',
    icon: <FaLaptopCode className="text-4xl text-purple-900" />,
  },
  {
    title: 'Project Collaboration',
    description: 'Join forces with peers on projects that enhance learning and professional growth.',
    icon: <FaHandsHelping className="text-4xl text-purple-900" />,
  },
  {
    title: 'Networking Opportunities',
    description: 'Expand your professional network through events and community engagements.',
    icon: <FaNetworkWired className="text-4xl text-purple-900" />,
  },
  {
    title: 'Supportive Community',
    description: 'Be part of a community that supports your academic and career aspirations.',
    icon: <FaUsers className="text-4xl text-purple-900" />,
  },
  {
    title: 'Certification Guidance',
    description: 'Receive guidance on certifications to advance your IT career.',
    icon: <FaCertificate className="text-4xl text-purple-900" />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-24 bg-gray-100 sm:px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl font-bold">Our Services</h2>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-56">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
