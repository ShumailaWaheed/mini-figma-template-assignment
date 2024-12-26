"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center h-[66px] justify-between px-4 shadow-2xl bg-gray-500">
      <div className="text-white font-bold">LOGO</div>

      <div className="hidden sm:flex gap-4">
        <div className="cursor-pointer text-white">Home</div>
        <div className="cursor-pointer text-white">About</div>
        <div className="cursor-pointer text-white">Services</div>
        <div className="cursor-pointer text-white">Contact us</div>
      </div>

      <div
        className="sm:hidden cursor-pointer text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      {isMenuOpen && (
        <div className="absolute top-[66px] left-0 w-full bg-gray-500 sm:hidden">
          <div className="flex flex-col gap-2 p-4">
            <div className="cursor-pointer text-white">Home</div>
            <div className="cursor-pointer text-white">About</div>
            <div className="cursor-pointer text-white">Services</div>
            <div className="cursor-pointer text-white">Contact us</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
