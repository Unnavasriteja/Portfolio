"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import Image from "next/image";

const AboutPage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const StylishDivider = () => (
    <motion.div
      className="flex justify-center items-center my-8"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 relative overflow-hidden">
        <div
          className="absolute w-full h-full top-0 left-0 animate-gradient-flow"
          style={{
            background: "linear-gradient(90deg, pink, purple, blue, pink)",
            backgroundSize: "300% 100%",
          }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-flow {
          animation: gradient-flow 5s infinite linear;
        }
      `}</style>
    </motion.div>
  );

  return (
    <motion.div
      className="about-page flex flex-col items-center text-center px-6"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <Container>
        {/* Hero Section */}
        <motion.section
          className="hero-section mt-20 max-w-6xl"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gradient mb-4">
            Hey, I&apos;m Sai Sri Teja Unnava
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Passionate about Cloud Computing, DevOps, and automation. I
            specialize in building robust CI/CD pipelines to enhance software
            delivery at every stage. Additionally, I&apos;m deeply involved in
            designing scalable and secure cloud solutions using AWS and modern
            infrastructure tools.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            When I&apos;m not coding, I love spending time with my family and
            friends, creating special memories with them. Also, I enjoy playing
            chess ♟️ and listening to music 🎵. Each activity brings something
            special to my life, and I&apos;m thankful to have lots of things I
            enjoy doing 😊.
          </p>
        </motion.section>

        {/* Stylish Divider */}
        <StylishDivider />

        {/* Certification Section */}
        <motion.section
          id="certification"
          className="mt-12"
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Certification Highlights
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              src="/assets/certifications/aws-certification.png"
              alt="AWS Certification"
              width={100}
              height={100}
              className="hover:scale-105 transition-transform"
            />
          </div>
        </motion.section>

        {/* Stylish Divider */}
    

        {/* Cloud Platforms Section */}
        <motion.section
          id="cloud-platforms"
          className="mt-12"
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Cloud Platforms
          </h2>
          <div className="tools flex flex-wrap justify-center gap-4">
            {["AWS", "GCP", "Azure"].map((platform, idx) => (
              <motion.div key={idx} className="relative group">
                <Image
                  src={`/assets/tools-about/${platform.toLowerCase()}.svg`}
                  alt={platform}
                  width={60}
                  height={60}
                  className="hover:scale-105 transition-transform"
                />
                <span className="tooltip group-hover:opacity-100 group-hover:block hidden">
                  {platform}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stylish Divider */}
   

        {/* DevOps Tools Section */}
        <motion.section
          id="devops-tools"
          className="mt-12"
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            DevOps Toolset Expertise
          </h2>
          <div className="tools flex flex-wrap justify-center gap-4">
            {[
              "Kubernetes",
              "Docker",
              "Terraform",
              "Jenkins",
              "Jira",
              "Prometheus",
              "Grafana",
            ].map((tool, idx) => (
              <motion.div key={idx} className="relative group">
                <Image
                  src={`/assets/tools-about/${tool.toLowerCase()}.svg`}
                  alt={tool}
                  width={60}
                  height={60}
                  className="hover:scale-105 transition-transform"
                />
                <span className="tooltip group-hover:opacity-100 group-hover:block hidden">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stylish Divider */}
    

        {/* Developer Tools Section */}
        <motion.section
          id="developer-tools"
          className="mt-12"
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Developer Tools & Scripting
          </h2>
          <div className="tools flex flex-wrap justify-center gap-4">
            {["HTML", "CSS", "JavaScript", "Python", "Bash"].map((tool, idx) => (
              <motion.div key={idx} className="relative group">
                <Image
                  src={`/assets/tools-about/${tool.toLowerCase()}.svg`}
                  alt={tool}
                  width={60}
                  height={60}
                  className="hover:scale-105 transition-transform"
                />
                <span className="tooltip group-hover:opacity-100 group-hover:block hidden">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stylish Divider */}
     

        {/* Libraries, Frameworks, and Databases Section */}
        <motion.section
          id="libraries-frameworks"
          className="mt-12"
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Libraries, Frameworks & Databases
          </h2>
          <div className="tools flex flex-wrap justify-center gap-4">
            {["React", "Redux", "Django", "MongoDB", "MySQL"].map((item, idx) => (
              <motion.div key={idx} className="relative group">
                <Image
                  src={`/assets/tools-about/${item.toLowerCase()}.svg`}
                  alt={item}
                  width={60}
                  height={60}
                  className="hover:scale-105 transition-transform"
                />
                <span className="tooltip group-hover:opacity-100 group-hover:block hidden">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stylish Divider */}
      

        {/* Work Experience Section */}
        <motion.section
          id="experience"
          className="mt-12"
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Work Experience
          </h2>
          <div className="flex flex-col gap-4">
            <motion.div
              className="bg-[rgba(0,0,0,0.5)] text-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-bold">Neuron Technologies Limited (UK)</h3>
              <p className="italic">Freelance Contractor (Apr 2023 – May 2024)</p>
              <ul className="list-disc text-left pl-6 mt-2">
                <li>Architected and developed Python-based ETL tools for PLM data transformation.</li>
                <li>Managed CI/CD pipelines for Google Cloud.</li>
                <li>Implemented RabbitMQ for event-based architecture message flow.</li>
                <li>Developed Python-based regression test suites.</li>
                <li>Involved in cloud database management and DevOps releases.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[rgba(0,0,0,0.5)] text-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-bold">Cognizant (Hyderabad, India)</h3>
              <p className="italic">Cloud Engineer (Nov 2017 – Dec 2020)</p>
              <ul className="list-disc text-left pl-6 mt-2">
                <li>Designed, implemented, and managed AWS cloud solutions for clients.</li>
                <li>Orchestrated containerization using EKS, improving efficiency by 30%.</li>
                <li>Automated infrastructure provisioning using AWS CloudFormation and Terraform.</li>
                <li>Established and optimized CI/CD pipelines with Jenkins, Git, and AWS CodePipeline.</li>
                <li>Enhanced monitoring and logging solutions with CloudWatch and Grafana.</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Stylish Divider */}
     

        {/* Education Section */}
        <motion.section
          id="education"
          className="mt-12"
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Education
          </h2>
          <div className="flex flex-col gap-4">
            <motion.div
              className="bg-[rgba(0,0,0,0.5)] text-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-bold">University of Leicester, United Kingdom</h3>
              <p className="italic">MSc. Cloud Computing (2021 – 2023)</p>
            </motion.div>
            <motion.div
              className="bg-[rgba(0,0,0,0.5)] text-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-bold">SCSVMV University, Chennai, India</h3>
              <p className="italic">B.Tech. in Information Technology (2012 – 2016)</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Stylish Divider */}
        

        {/* Contact Section */}
        <section id="contact" className="mt-12">
  <h2 className="text-3xl font-bold text-white text-center mb-4">
    Interested in what I have to offer?
  </h2>
  <p className="text-lg text-gray-200 mt-2 text-center">
    Feel free to reach out via the contact form. I&apos;ll get back to
    you as soon as possible.
  </p>
  <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 items-center">
    <Button
      href="/contact"
      aria-label="Go to the contact form"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md text-center"
    >
      Contact Me
    </Button>
    <a
      href="https://drive.google.com/uc?export=download&id=1Wm_lkOzrX7p3GFoldMmwbK61soQsX6no"
      download
      aria-label="Download my resume"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md text-center"
    >
      Download Resume
    </a>
  </div>
</section>

      </Container>
    </motion.div>
  );
};

export default AboutPage;
