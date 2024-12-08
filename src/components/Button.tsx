import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  download = false,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition-colors ${className}`}
      download={download}
      target={download ? "_self" : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
    >
      {children}
    </a>
  );
};
