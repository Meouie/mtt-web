import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center h-16 px-6">
      <div className="container flex items-center justify-between h-full">

        {/* Left: Logo */}
        <div className="text-2xl font-bold text-shadow-lg">MTT</div>

        {/* Center: Search Box */}
        <div className="hidden flex-1 md:flex justify-center">
          <input
            type="text"
            placeholder="Search for a player"
            className="w-full max-w-sm px-4 py-2 border border-secondary rounded-xl bg-[rgba(255,255,255,0.01)] hover:bg-secondary focus:bg-secondary transition cursor-text focus:outline-none shadow-lg"
          />
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://discord.gg/CwtfYEV6p7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition text-foreground hover:text-white"
          >
            Discord
          </a>
          <a
            href="#tier-list"
            className="transition text-foreground hover:text-white">
            Tier List
          </a>
        </div>

          <button
            className="md:hidden px-4 py-2 border border-secondary rounded-xl bg-[rgba(255,255,255,0.01)] hover:bg-secondary focus:bg-secondary transition">
            ⋮ 
          </button>

      </div>
    </nav>
  );
};

export default Navbar;
