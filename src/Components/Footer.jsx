import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">

        

        {/* Bottom Section - Copyright */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
