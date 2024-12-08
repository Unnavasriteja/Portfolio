"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blobs";
import PageTransition from "../components/PageTransition"; // Import PageTransition
import "../styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Sai Sri Teja Unnava - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sai Sri Teja Unnava, a Cloud Computing and DevOps Engineer with expertise in AWS, Kubernetes, Terraform, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Wrapper for the entire layout */}
        <div className="relative min-h-screen flex flex-col">
          {/* Shared Blob */}
          <div className="blob-wrapper">
            <Blob />
          </div>

          {/* Header */}
          <Header />

          {/* Main Content with PageTransition */}
          <main className="content-container flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
