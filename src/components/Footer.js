import React from "react";
import RadiantSphere from "./RadiantSphere";

const Footer = () => {
  return (
    <footer className="mt-16 relative bottom-0 w-full flex justify-center p-16 border-t border-secondary">
      <div className="container flex md:items-center flex-col md:flex-row space-y-8 md:space-y-0 justify-between h-full">
        {/* Left: Logo */}
        <div>
          <p className="text-2xl font-bold">Minemen Tier Tests</p>
          <p className="text-lg text-gray-300">
            ❤️ Website by{" "}
            <a
              href="https://antinity.me"
              target="_blank"
              className="text-pink-400 hover:text-pink-500 transition font-bold"
            >
              Antinity
            </a>
          </p>
          <p className="text-sm text-gray-300">
            Copyright © 2025, All Rights Reserved
          </p>
        </div>

        {/* Right: Nav Links */}
        <div className="flex flex-col items-start  space-y-4 md:space-y-2">
          <a href="https://discord.gg/CwtfYEV6p7" target="_blank" rel="noopener noreferrer" className="transition text-foreground hover:text-white">Discord</a>
          <a href="#tier-list" className="transition text-foreground hover:text-white">Tier List</a>
          <a href="terms" className="transition text-foreground hover:text-white">Terms of Service</a>
          <a href="/privacy" className="transition text-foreground hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
