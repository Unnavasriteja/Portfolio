import React from "react";

interface PageTransitionProps {
  children: React.ReactNode; // Only children
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <div className="page-transition">{children}</div>;
};

export default PageTransition;
