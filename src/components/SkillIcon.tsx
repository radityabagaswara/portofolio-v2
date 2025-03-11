import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}

export const SkillIcon = ({ icon, title }: Props) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="brightness-95 hover:brightness-100">{icon}</div>
      <div className="-bottom-14 z-40 absolute w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all">
        <div className="bg-foreground px-4 py-3 opacity-90 rounded-lg">
          <p className="text-background">{title}</p>
        </div>
      </div>
    </div>
  );
};
