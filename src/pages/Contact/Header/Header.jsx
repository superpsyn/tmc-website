// Header.jsx
import React, { useState, useEffect } from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import Sidebar from './Sidebar';

const Header = () => {
  // State to control sidebar visibility
  const [isOpen, setOpen] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent p-4 text-xl text-white font-bold z-20 flex justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <h1 className="mr-2">TMC</h1>
        <h4 className="text-xs">Tech Masters Connect</h4>
      </div>
      
      <div className="relative">
        {/* Hamburger button */}
        <div className="flex items-center justify-end">
          <Hamburger toggled={isOpen} onToggle={setOpen} />
        </div>
        
        {/* Sidebar component positioned as dropdown */}
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;