"use client";

import React from "react";

const AnimatedSVG: React.FC = () => {
  return (
    <div className="animated-svg-container">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="animated-svg"
      >
        <path
          d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,00 L0,0 Z"
          style={{
            fill: "url(#grad1)",
            animation: "wave 5s infinite",
          }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#6c63ff", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#00a1ff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <style jsx>{`
        .animated-svg-container {
          position: fixed;
          width: 100%;
          height: 120px;
          bottom: 0;
          left: 0;
          z-index: -1;
        }
        .animated-svg {
          width: 100%;
          height: 100%;
        }
        @keyframes wave {
          0% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSVG;
