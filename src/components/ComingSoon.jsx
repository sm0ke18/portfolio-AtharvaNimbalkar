import React from 'react';

const ComingSoon = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white w-full">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-8 text-center px-4">
        Coming Soon
      </h1>
      <button 
        onClick={onBack}
        className="cursor-pointer px-8 py-3 rounded-full border border-white/15 text-black bg-white font-bold text-sm md:text-base hover:bg-gray-200 hover:border-gray-200 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
};

export default ComingSoon;
