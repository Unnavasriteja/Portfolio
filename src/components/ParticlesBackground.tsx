"use client";

import React from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // Import loadSlim instead of loadFull

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    // Load the slim version of tsParticles
    await loadSlim(engine);
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent", // Ensures transparency for your existing gradient
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800, // Adjust for better clarity
              },
            },
            color: {
              value: "#ffffff", // White particles
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repel effect when hovering
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
