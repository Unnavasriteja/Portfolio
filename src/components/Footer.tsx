"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com/in/saisritejaunnava/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Unnavasriteja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>© 2024 Sai Sri Teja Unnava. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
