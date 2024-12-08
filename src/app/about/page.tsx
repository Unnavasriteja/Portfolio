"use client";

import React from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="about-page flex flex-col items-center text-center px-6">
      <Container>
        {/* Hero Section */}
        <section className="hero-section mt-16 max-w-4xl">
          <h1 className="text-5xl font-bold text-gradient mb-4">
            Hey, I&apos;m Sai Sri Teja Unnava
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Passionate about Cloud Computing, DevOps, and automation. I specialize
            in building robust CI/CD pipelines to enhance software delivery at
            every stage. Additionally, I&apos;m deeply involved in designing scalable
            and secure cloud solutions using AWS and modern infrastructure tools.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            When I&apos;m not coding, I love spending time with my family and friends,
            creating special memories with them. Also, I enjoy playing chess ♟️
            and listening to music 🎵. Each activity brings something special to
            my life, and I&apos;m thankful to have lots of things I enjoy doing 😊.
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
              <Image
                src="/assets/certifications/aws-certification.png"
                alt="AWS Certification"
                className="hover:scale-105 transition-transform"
                width={96}
                height={96}
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
            <Image src="/assets/tools-about/kubernetes.svg" alt="Kubernetes" width={92} height={92} />
            <Image src="/assets/tools-about/docker.svg" alt="Docker" width={92} height={92} />
            <Image src="/assets/tools-about/aws.svg" alt="AWS" width={92} height={92} />
            <Image src="/assets/tools-about/azure.svg" alt="Azure" width={92} height={92} />
            <Image src="/assets/tools-about/terraform.svg" alt="Terraform" width={92} height={92} />
          </div>
        </section>

        {/* Frontend & Backend Tools */}
        <section id="frontend-backend" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Frontend & Backend Expertise
          </h2>
          <div className="tools flex flex-wrap justify-center gap-8 mt-8">
            <Image src="/assets/tools-about/html.svg" alt="HTML" width={92} height={92} />
            <Image src="/assets/tools-about/css.svg" alt="CSS" width={92} height={92} />
            <Image src="/assets/tools-about/javascript.svg" alt="JavaScript" width={92} height={92} />
            <Image src="/assets/tools-about/python.svg" alt="Python" width={92} height={92} />
            <Image src="/assets/tools-about/nodejs.svg" alt="Node.js" width={92} height={92} />
          </div>
        </section>

        {/* Libraries & Frameworks */}
        <section id="libraries-frameworks" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Libraries, Frameworks & Databases
          </h2>
          <div className="tools flex flex-wrap justify-center gap-8 mt-8">
            <Image src="/assets/tools-about/react.svg" alt="React" width={92} height={92} />
            <Image src="/assets/tools-about/redux.svg" alt="Redux" width={92} height={92} />
            <Image src="/assets/tools-about/django.svg" alt="Django" width={92} height={92} />
            <Image src="/assets/tools-about/mongodb.svg" alt="MongoDB" width={92} height={92} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-30">
          <h2 className="text-3xl font-bold text-white text-center mt-16">
            Interested in what I have to offer?
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Feel free to reach out via the contact form. I&apos;ll get back to you as soon as possible.
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
