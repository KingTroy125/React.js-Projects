import React from 'react';
import { Mail, Facebook, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 fade-in">
        <h2 className="text-xs md:text-sm tracking-wider">TRISTAN</h2>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col md:flex-row items-center">
        {/* Left side - Glitch Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:pl-20 pt-16 md:pt-0">
          <div className="glitch text-5xl md:text-8xl font-bold tracking-widest leading-tight text-center md:text-left" data-text="LAUNCHING SOON">
            LAUNCHING<br />SOON
          </div>
        </div>

        {/* Right side - Description and Contact */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:px-20 fade-in">
          <div className="space-y-6 md:space-y-8 max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed">
              It's not here yet, but we'll let you in on a secret: It's coming really, really soon.
              So sit tight and check back in on July 31. You just might see something that will
              blow your socks off!
            </p>

            <div className="space-y-4 pt-4 md:pt-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@reallygreatsite.com" className="text-sm md:text-base hover:text-gray-300 transition-colors">
                  hello@reallygreatsite.com
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
                <a href="https://facebook.com" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm md:text-base">Facebook</span>
                </a>
                <a href="https://instagram.com" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm md:text-base">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;