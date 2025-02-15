import React from 'react';
import '/src/pages/Events/components/Section/section.css'; // Import your custom CSS file

const Section = () => {
  // Sample events array with a registerUrl property for each event.
  const events = [
    {
      id: 1,
      title: "Launch Event",
      date: "2024-11-20",
      description: "Launch of Tech Masters Connect.",
      registerUrl: "https://example.com/register/launch-event"
    },
    {
      id: 2,
      title: "Hackathon Kickoff",
      date: "2024-12-05",
      description: "Join our tech hackathon and innovate.",
      registerUrl: "https://example.com/register/hackathon-kickoff"
    },
    // Add more events as needed.
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center p-8">
      {/* Tech-inspired overlay (adjust the image path as needed) */}
      <div className="absolute inset-0 bg-[url('/tech-overlay.png')] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-3xl">
        {/* Page Title */}
        <h1 className="text-center text-4xl font-bold mb-8 text-white">Events</h1>
        
        {/* Render Event Cards */}
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                  <h3 className="text-lg text-gray-300">{event.date}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
                {/* Register button rendered as a link */}
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-blue-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded cursor-pointer transition-colors duration-300 button-sweep"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
