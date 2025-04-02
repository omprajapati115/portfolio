import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p>© {currentYear} Made by Om Prajapati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 