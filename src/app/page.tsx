"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

const slideInVariant = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -200 : 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

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

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="hero-section text-white relative"
      >
        <div className="container mx-auto flex flex-col items-center text-center relative z-10 px-4 sm:px-8 md:px-12 py-20">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="profile-pic-wrapper"
            >
              <Image
                src="/assets/profile.jpeg"
                alt="Sai Sri Teja Unnava"
                width={200}
                height={200}
                priority // Prioritize above-the-fold image
                placeholder="blur" // Adds blur effect for better UX
                blurDataURL="/assets/blur-placeholder.jpg" // Replace with a real blur placeholder
                className="profile-pic"
              />
            </motion.div>
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
            <motion.a
              href="contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-600 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="about"
              className="px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg transition duration-300"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Know more about me →
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* DevOps Section */}
      <motion.section
        id="devops"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariant("left")}
        className="section py-16"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div className="flex-shrink-0">
            <Image
              src="/assets/devops-icon.png"
              alt="DevOps Tools"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="/assets/devops-placeholder.jpg"
              className="section-icon"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-left">DevOps</h2>
            <p className="text-lg text-left">
              Streamlining Development and Operational Processes: I also have
              experience with Infrastructure as Code (IaC), using tools like
              Terraform or CloudFormation to provision and manage cloud
              resources. Additionally, containerization with technologies like
              Docker and Kubernetes allows me to package and deploy
              applications consistently across different environments.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Cloud Computing Section */}
      <motion.section
        id="cloud-computing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariant("right")}
        className="section py-16"
      >
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          <motion.div className="flex-shrink-0">
            <Image
              src="/assets/cloud-icon.png"
              alt="Cloud Computing Illustration"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="/assets/cloud-placeholder.jpg"
              className="section-icon"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-right">
              Cloud Computing
            </h2>
            <p className="text-lg text-right">
              Seamlessly Scaling Web Applications with AWS and Azure: I have
              hands-on experience with cloud platforms such as AWS and Azure.
              By leveraging cloud services like Amazon S3 for storage, AWS
              Lambda for serverless functions, and Azure App Service for
              hosting, I optimize the performance and cost-efficiency of my
              applications.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
