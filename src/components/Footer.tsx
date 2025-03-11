import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center text-center pb-12 text-foreground-mutted">
      <p>Copyright © {new Date().getFullYear()} Raditya Bagaswara</p>
    </div>
  );
};
