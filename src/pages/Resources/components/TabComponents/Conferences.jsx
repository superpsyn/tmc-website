import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Conferences = () => {
  // Mock data for conferences
  const conferencesData = [
    {
      id: 1,
      title: "International Cybersecurity Conference 2024",
      description:
        "Join leading experts as they discuss the future of cybersecurity, emerging threats, and innovative defense strategies.",
      link: "https://example.com/cybersecurity-conference",
    },
    {
      id: 2,
      title: "Global AI Summit 2024",
      description:
        "Explore the latest advancements in AI and machine learning, and learn from world-renowned researchers and industry leaders.",
      link: "https://example.com/ai-summit",
    },
    {
      id: 3,
      title: "Blockchain Expo",
      description:
        "Discover new trends and opportunities in blockchain technology and its applications in finance, healthcare, and more.",
      link: "https://example.com/blockchain-expo",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Conferences</h1>
      <div className="space-y-6">
        {conferencesData.map((conf) => (
          <div key={conf.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-2">
              <FaCalendarAlt className="text-gray-500" size={20} />
              <p className="text-sm text-gray-500">Conference</p>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-2">{conf.title}</h2>
            <p className="text-gray-700 mb-4">{conf.description}</p>
            <a
              href={conf.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
