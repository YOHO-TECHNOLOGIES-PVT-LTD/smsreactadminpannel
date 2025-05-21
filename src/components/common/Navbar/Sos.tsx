import React from 'react';

const SosButton = () => {
  const handleSosClick = () => {
    alert('Emergency SOS Triggered!');
  };

  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
      <div className="relative">
        <span className="absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-75 animate-ping"></span>
        <button
          onClick={handleSosClick}
          className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
        >
          SOS
        </button>
      </div>
    </div>
  );
};

export default SosButton;
