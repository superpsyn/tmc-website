// Sidebar.jsx
import React from 'react';

const Sidebar = ({ isOpen, setOpen }) => {
  return (
    <div className="relative">
      {isOpen && (
        <div 
        className="fixed inset-0 z-10" 
        onClick={() => setOpen(false)}
      />
      )}
      
      <aside
        className={`absolute right-0 top-full mt-3 w-56 bg-white rounded-lg shadow-xl z-20 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 pointer-events-none'
        } transition-all duration-600 ease-in-out`}
      >
        <div className="py-3">
         
          <a 
            href="/events" 
            className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-400" 
            onClick={() => setOpen(false)}
          >
            Events
          </a>
          <a 
            href="#" 
            className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-400" 
            onClick={() => setOpen(false)}
          >
            Blog
          </a>
          <a 
            href="/resources" 
            className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-400" 
            onClick={() => setOpen(false)}
          >
            Resources
          </a>
          <a 
            href="/contact" 
            className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-400" 
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
