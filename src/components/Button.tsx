import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  link?: string | null;
  type?: "inverted" | "default";
}

export const Button = ({ children, link, type = "default" }: ButtonProps) => {
  const classVar = `p-2 px-4 cursor-pointer rounded-xl ${type == "default" ? "bg-foreground text-background" : "text-foreground bg-background"} text-background  hover:scale-95 transition-all`;

  if (link) {
    return (
      <a href={link} target="_blank">
        <button className={classVar}>{children}</button>
      </a>
    );
  }

  return <button className={classVar}>{children}</button>;
};
