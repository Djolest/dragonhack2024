// components/Footer.tsx

import React from 'react';
import { NAV_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-container flex flex-wrap justify-center gap-6">
        {NAV_LINKS.map((link) => (
          <a href={link.href} key={link.key} className="text-gray-300 hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
