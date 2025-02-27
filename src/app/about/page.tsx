"use client";

import React from "react";
import { motion } from "framer-motion";
//import { Button } from "../../components/Button";
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
  className="hero-section mt-20 max-w-6xl mx-auto px-6 py-12 relative"
  variants={fadeInVariants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.8 }}
>
  <div className="border border-gray-600 rounded-lg p-8 shadow-lg">
    <h1 className="text-5xl font-bold text-white mb-4 text-center">
      Hey, I&apos;m Sai Sri Teja Unnava
    </h1>
    <p className="text-lg text-gray-200 leading-relaxed text-center">
    Passionate about Cloud Computing, DevOps, and automation. I specialize in 
    building scalable and secure cloud solutions using AWS, Kubernetes, Terraform, 
    and CI/CD pipelines. My goal is to streamline deployments, optimize infrastructure, 
    and drive efficiency through automation.
    </p>
    <p className="text-lg text-gray-200 leading-relaxed mt-4 text-center">
    When I&apos;m not working with cloud technologies, I love spending time with my 
    family and friends, creating special memories. I also enjoy playing chess ♟️, 
    listening to music 🎵, experimenting in the kitchen 🍳, and traveling to explore 
    new places 🌍. On the creative side, I occasionally perform stand-up comedy 🎤, 
    bringing a little humor into the mix.
    </p>
    <p className="text-lg text-gray-200 leading-relaxed mt-4 text-center">
    Each of these activities adds something special to my journey, and I&apos;m grateful 
    to have such diverse interests that keep me inspired! 😊
    </p>
  </div>
</motion.section>
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
              <a
                href="https://www.credly.com/badges/89d1f07b-5246-4cf5-a66f-3e954c8ade36/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/certifications/aws-certification.png"
                  alt="AWS Certification"
                  width={100}
                  height={100}
                  className="hover:scale-105 transition-transform"
                />
              </a>
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
                <span className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {platform}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
                <span className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
                <span className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
                <span className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
            {/* Contact Button */}
            <motion.a
              href="/contact"
              aria-label="Go to the contact form"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-md text-center w-full sm:w-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

            {/* Download Resume Button */}
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1Wm_lkOzrX7p3GFoldMmwbK61soQsX6no"
              download
              aria-label="Download my resume"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-lg font-bold hover:scale-105 transition duration-300 shadow-md text-center w-full sm:w-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </section>



      </Container>
    </motion.div>
  );
};

export default AboutPage;
