"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Add scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the current page is home
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === "/");
    }
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(0,0,0,0.8)] text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1
          className={`text-xl font-bold ${
            isHomePage
              ? "gradient-text hover:scale-110 transition-transform duration-300"
              : "text-white"
          }`}
        >
          <Link href="/">Sai Sri Teja Unnava</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-[rgba(0,0,0,0.9)] text-white flex flex-col items-center space-y-4 py-6"
          role="menu"
        >
          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="hover:text-yellow-400 transition-colors duration-300"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="hover:text-yellow-400 transition-colors duration-300"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="hover:text-yellow-400 transition-colors duration-300"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors duration-300"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
