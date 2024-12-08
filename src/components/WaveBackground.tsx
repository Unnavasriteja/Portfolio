"use client";

import React from "react";

const WaveBackground: React.FC = () => {
  return (
    <div className="wave-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="animated-wave"
      >
        <path
          fill="#1e293b"
          fillOpacity="1"
          d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,192C672,149,768,75,864,64C960,53,1056,107,1152,138.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveBackground;
