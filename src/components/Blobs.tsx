// app/components/Blobs.tsx
import React from "react";

const Blob = () => (
  <div className="blob-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 700"
      className="blob-svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d6ef6" />
          <stop offset="50%" stopColor="#742dbe" />
          <stop offset="100%" stopColor="#e65100" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient)">
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
            M417.2,305Q410,360,359.3,389.1Q308.6,418.1,245.4,440.8Q182.2,463.6,119,432.3Q55.8,401.1,46.6,325.5Q37.5,250,49.7,184.1Q62,118.1,118,88.7Q174,59.4,239.4,66Q304.9,72.7,364.7,98.7Q424.5,124.7,430.8,187.3Q437.2,250,417.2,305Z;
            M469.3,320.4Q443.8,390.8,373.5,402.1Q303.2,413.5,238.9,448.3Q174.5,483.2,122.8,431.7Q71,380.2,76.8,315.1Q82.7,250,78.9,186.3Q75.2,122.6,131.9,91.7Q188.7,60.8,253.2,51.5Q317.8,42.2,359.6,90.9Q401.4,139.6,448.1,194.8Q494.8,250,469.3,320.4Z;
            M439.4,316.5Q432.4,383,370.4,407.1Q308.3,431.3,240.1,459.8Q171.9,488.3,132.3,426.3Q92.7,364.2,63.2,307.1Q33.8,250,44.1,178.9Q54.4,107.8,118.7,75.3Q183,42.8,240.6,72.7Q298.2,102.5,368.1,107.9Q438,113.2,442.2,181.6Q446.4,250,439.4,316.5Z;
            M417.2,305Q410,360,359.3,389.1Q308.6,418.1,245.4,440.8Q182.2,463.6,119,432.3Q55.8,401.1,46.6,325.5Q37.5,250,49.7,184.1Q62,118.1,118,88.7Q174,59.4,239.4,66Q304.9,72.7,364.7,98.7Q424.5,124.7,430.8,187.3Q437.2,250,417.2,305Z"
        />
      </path>
    </svg>
  </div>
);

export default Blob;
