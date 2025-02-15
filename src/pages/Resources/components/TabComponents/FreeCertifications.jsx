import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const FreeCertifications = () => {
  // Array of free certification data
  const certificationsData = [
    {
      id: 1,
      title: "Google Analytics Academy",
      description: "Learn the fundamentals of digital analytics and data analysis through free courses from Google Analytics.",
      link: "https://analytics.google.com/analytics/academy/"
    },
    {
      id: 2,
      title: "HubSpot Inbound Marketing Certification",
      description: "Master inbound marketing techniques and strategies with this free certification course from HubSpot.",
      link: "https://academy.hubspot.com/courses/inbound-marketing"
    },
    {
      id: 3,
      title: "IBM Data Science Professional Certificate",
      description: "Kickstart your data science career with IBM's free courses available on Coursera.",
      link: "https://www.coursera.org/professional-certificates/ibm-data-science"
    },
    {
      id: 4,
      title: "Microsoft Azure Fundamentals",
      description: "Get started with cloud services and learn about Azure with free certification courses from Microsoft.",
      link: "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/"
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Free Certification Links</h1>
      <div className="space-y-6">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-2">
              <FaCertificate className="text-gray-500" size={20} />
              <p className="text-sm text-gray-500">Certification</p>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-2">{cert.title}</h2>
            <p className="text-gray-700 mb-4">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
            >
              Visit Course
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeCertifications;
