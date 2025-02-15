import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const ResearchPapers = () => {
  // Mock data for research papers
  const papersData = [
    {
      id: 1,
      title: "Deep Learning for Cybersecurity",
      description:
        "An in-depth study of deep learning techniques applied to cybersecurity threat detection.",
      link: "https://example.com/deep-learning-cybersecurity",
    },
    {
      id: 2,
      title: "Blockchain in Supply Chain Management",
      description:
        "Exploring the role of blockchain technology in enhancing transparency and efficiency in supply chains.",
      link: "https://example.com/blockchain-supply-chain",
    },
    {
      id: 3,
      title: "Advances in Quantum Computing",
      description:
        "A review of recent advancements in quantum computing and its potential applications in various fields.",
      link: "https://example.com/quantum-computing",
    },
    // Add more research papers as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Research Papers</h1>
      <div className="space-y-6">
        {papersData.map((paper) => (
          <div key={paper.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-2">
              <FaFileAlt className="text-gray-500" size={20} />
              <p className="text-sm text-gray-500">Research Paper</p>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-2">{paper.title}</h2>
            <p className="text-gray-700 mb-4">{paper.description}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
