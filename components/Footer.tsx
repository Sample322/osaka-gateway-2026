import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold font-cyber">OSAKA GATEWAY 2026</h3>
          <p className="text-gray-400 text-sm">Connecting global capital with Japanese heritage.</p>
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Contact Support</span>
        </div>
        <div className="mt-4 md:mt-0 text-xs text-gray-500">
          © 2026 Osaka Gateway. All rights reserved.
        </div>
      </div>
    </footer>
  );
};