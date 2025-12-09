"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import Image from "next/image";

type NavProps = {
  active: string;
  onNavigate: (id: string) => void;
  items: Array<{ id: string; label: string }>;
};

export const Navigation: React.FC<NavProps> = ({ active, onNavigate, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <>
      {/* Desktop + Mobile Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200/50 dark:border-gray-700/50 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-2 font-bold text-lg text-gray-800 dark:text-white hover:opacity-80 transition"
              aria-label="Go to home"
            >
              {/* Option 1: Text Logo */}
              <Image
                src="/images/logo.png"
                alt="CinoGrow Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="tracking-tight">CinoGrow</span>


              {/* Option 2: SVG/Icon Logo (uncomment if you prefer) */}
              {/* <svg width="32" height="32" viewBox="0 0 100 100" className="fill-blue-600">
                <circle cx="50" cy="50" r="40" />
                <text x="50" y="58" fontSize="48" textAnchor="middle" fill="white" fontWeight="bold">Y</text>
              </svg> */}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1">
              {items.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      active === id
                        ? "bg-green-600 text-white shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
                    }`}
                    aria-current={active === id ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-out origin-top ${
            isOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          <div className="mx-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <ul className="py-3">
              {items.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`w-full text-left px-6 py-3 text-base font-medium transition-colors ${
                      active === id
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    aria-current={active === id ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Backdrop blur when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};