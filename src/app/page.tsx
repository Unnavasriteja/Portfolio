"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/global.css";

const skills = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Jenkins",
  "Python",
  "Shell Scripting",
  "Java",
  "ReactJs",
];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const devOpsRef = useRef<HTMLDivElement | null>(null);
  const cloudRef = useRef<HTMLDivElement | null>(null);

  // Typing Animation Logic
  useEffect(() => {
    const handleTyping = () => {
      const fullSkill = skills[skillIndex];
      const isEnd = !isDeleting && typedText === fullSkill;
      const isStart = isDeleting && typedText === "";

      if (isEnd) {
        setTimeout(() => setIsDeleting(true), 2000);
        setSpeed(50);
      } else if (isStart) {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
        setSpeed(100);
      } else {
        const nextText = isDeleting
          ? fullSkill.slice(0, typedText.length - 1)
          : fullSkill.slice(0, typedText.length + 1);
        setTypedText(nextText);
      }
    };

    const interval = setInterval(handleTyping, speed);
    return () => clearInterval(interval);
  }, [typedText, isDeleting, skillIndex, speed]);

  // Scroll Animation Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          section.classList.add("appear");
        } else {
          section.classList.remove("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white relative">
        <div className="blob-wrapper"></div>

        <div className="container mx-auto flex flex-col items-center text-center relative z-10 px-4 sm:px-8 md:px-12 py-20 fade-in">
          <div className="relative">
            <div className="profile-pic-wrapper">
              <Image
                src="/assets/profile.jpeg"
                alt="Sai Sri Teja Unnava"
                width={200}
                height={200}
                className="profile-pic"
              />
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-5xl font-bold mb-4">Sai Sri Teja Unnava</h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I&apos;m passionate about Cloud Computing, DevOps, and automation.
              I specialize in building robust CI/CD pipelines to enhance
              software delivery at every stage. Additionally, I&apos;m deeply
              involved in designing scalable and secure cloud solutions using
              AWS and modern infrastructure tools. I&apos;m excited about
              developing and working with{" "}
              <span className="text-yellow-400 typing-text">{typedText}</span>.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1Wm_lkOzrX7p3GFoldMmwbK61soQsX6no"
              download="Sai_Sri_Teja_Unnava_Resume.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="text-white underline text-lg hover:text-yellow-300"
            >
              Explore Projects →
            </a>
          </div>
        </div>
      </section>

      {/* DevOps Section */}
      <section id="devops" ref={devOpsRef} className="section">
        <div className="container mx-auto flex items-center gap-8">
          <Image
            src="/assets/devops-icon.png"
            alt="DevOps Tools"
            width={100}
            height={100}
            className="section-icon"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">DevOps</h2>
            <p className="text-lg">
              Streamlining Development and Operational Processes: I also have
              experience with Infrastructure as Code (IaC), using tools like
              Terraform or CloudFormation to provision and manage cloud
              resources. Additionally, containerization with technologies like
              Docker and Kubernetes allows me to package and deploy
              applications consistently across different environments.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Computing Section */}
      <section id="cloud-computing" ref={cloudRef} className="section">
        <div className="container mx-auto flex items-center gap-8 flex-row-reverse">
          <Image
            src="/assets/cloud-icon.png"
            alt="Cloud Computing Illustration"
            width={100}
            height={100}
            className="section-icon"
          />
          <div className="text-right">
            <h2 className="text-3xl font-bold mb-4">Cloud Computing</h2>
            <p className="text-lg">
              Seamlessly Scaling Web Applications with AWS and Azure: I have
              hands-on experience with cloud platforms such as AWS and Azure.
              By leveraging cloud services like Amazon S3 for storage, AWS
              Lambda for serverless functions, and Azure App Service for
              hosting, I optimize the performance and cost-efficiency of my
              applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
