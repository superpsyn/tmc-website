import React, { useState } from 'react';
import TechNews from './TabComponents/TechNews';
import FreeCertifications from './TabComponents/FreeCertifications';
import ResearchPapers from './TabComponents/ResearchPapers';
import Conferences from './TabComponents/Conferences';

const Main = () => {
  const resources = [
    {
      id: 1,
      title: "Tech News",
      description: "Latest updates and articles on technology trends.",
      component: <TechNews />,
    },
    {
      id: 2,
      title: "Free Certification Links",
      description: "Access free certification courses and training materials.",
      component: <FreeCertifications />,
    },
    {
      id: 3,
      title: "Research Papers",
      description: "Explore research papers and academic articles.",
      component: <ResearchPapers />,
    },
    {
      id: 4,
      title: "Conferences",
      description: "Information on upcoming tech conferences and events.",
      component: <Conferences />,
    },
  ];

  // State for the active tab index.
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-16 relative min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="text-white text-4xl font-bold mb-8 mt-32">Student Resources</h1>
      
      <div className="w-full max-w-md sm:max-w-4xl">
        {/* Tab Headers */}
        <div className="flex border-b border-white mb-2 sm:mb-4 overflow-x-auto">
          {resources.map((resource, index) => (
            <button
              key={resource.id}
              onClick={() => setActiveTab(index)}
              className={`flex-1 p-2 sm:p-4 font-semibold transition-colors duration-300 whitespace-normal
                ${activeTab === index 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white hover:bg-white hover:text-black'}`}
            >
              {resource.title}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          {resources[activeTab].component}
        </div>
      </div>
    </div>
  );
};

export default Main;
