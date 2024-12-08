"use client";

import React from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

const AboutPage = () => {
  return (
    <div className="about-page flex flex-col items-center text-center px-6">
      <Container>
        {/* Hero Section */}
        <section className="hero-section mt-16 max-w-4xl">
          <h1 className="text-5xl font-bold text-gradient mb-4">
            Hey, I'm Sai Sri Teja Unnava
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Passionate about Cloud Computing, DevOps, and automation. I specialize
            in building robust CI/CD pipelines to enhance software delivery at
            every stage. Additionally, I’m deeply involved in designing scalable
            and secure cloud solutions using AWS and modern infrastructure tools.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            When I’m not coding, I love spending time with my family and friends,
            creating special memories with them. Also, I enjoy playing chess ♟️
            and listening to music 🎵. Each activity brings something special to
            my life, and I’m thankful to have lots of things I enjoy doing 😊.
          </p>
        </section>

        {/* Certification Section */}
        <section className="certifications-section mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Certification Highlights</h2>
          <div className="certifications flex flex-wrap justify-center gap-6">
            <a
              href="https://www.credly.com/badges/89d1f07b-5236-4cf5-a66f-3e954c8ade36/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/certifications/aws-certification.png"
                alt="AWS Certification"
                className="w-24 h-24 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </section>

        {/* DevOps Tools Section */}
        <section id="tools" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            DevOps Toolset Expertise
          </h2>
          <div className="tools flex flex-wrap justify-center gap-8 mt-8">
            <img src="/assets/tools-about/kubernetes.svg" alt="Kubernetes" className="w-23" />
            <img src="/assets/tools-about/docker.svg" alt="Docker" className="w-23" />
            <img src="/assets/tools-about/aws.svg" alt="AWS" className="w-23" />
            <img src="/assets/tools-about/azure.svg" alt="Azure" className="w-23" />
            <img src="/assets/tools-about/terraform.svg" alt="Terraform" className="w-23" />
          </div>
        </section>

        {/* Frontend & Backend Tools */}
        <section id="frontend-backend" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Frontend & Backend Expertise
          </h2>
          <div className="tools flex flex-wrap justify-center gap-8 mt-8">
            <img src="/assets/tools-about/html.svg" alt="HTML" className="w-23" />
            <img src="/assets/tools-about/css.svg" alt="CSS" className="w-23" />
            <img src="/assets/tools-about/javascript.svg" alt="JavaScript" className="w-23" />
            <img src="/assets/tools-about/python.svg" alt="Python" className="w-23" />
            <img src="/assets/tools-about/nodejs.svg" alt="Node.js" className="w-23" />
          </div>
        </section>

        {/* Libraries & Frameworks */}
        <section id="libraries-frameworks" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Libraries, Frameworks & Databases
          </h2>
          <div className="tools flex flex-wrap justify-center gap-8 mt-8">
            <img src="/assets/tools-about/react.svg" alt="React" className="w-23" />
            <img src="/assets/tools-about/redux.svg" alt="Redux" className="w-23" />
            <img src="/assets/tools-about/django.svg" alt="Django" className="w-23" />
            <img src="/assets/tools-about/mongodb.svg" alt="MongoDB" className="w-23" />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Work Experience
          </h2>
          <div className="experience-list mt-6">
            <p className="text-lg text-gray-200">
              <strong>Cloud & DevOps Engineer</strong> at Cognizant (Nov 2017 - Dec 2020)
              <br />
              Focused on Linux server administration, CI/CD, and cloud architecture.
            </p>
            <p className="text-lg text-gray-200 mt-4">
              <strong>Freelance Work</strong> at Neuron Technologies (Mar 2023 - May 2023)
              <br />
              Worked on AWS infrastructure design and implementation in the UK.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Education
          </h2>
          <div className="education-list mt-6">
            <p className="text-lg text-gray-200">
              <strong>MSc in Cloud Computing</strong>
              <br />
              Focused on advanced cloud architectures and DevOps practices.
              <br /><br />
              <strong>B.Tech in Information Technology</strong>
              <br />
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Interested in what I have to offer?
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Feel free to reach out via the contact form. I'll get back to you as soon as possible.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Button href="/contact">Contact Me</Button>
            <a
              href="https://drive.google.com/uc?export=download&id=1Wm_lkOzrX7p3GFoldMmwbK61soQsX6no"
              download
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;
