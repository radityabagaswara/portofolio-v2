import React from "react";

interface Props {
  text: string;
}

function Chip({ text }: Props) {
  return (
    <div className="p-2 bg-foreground rounded-xl w-max">
      <p className="text-background text-xs">{text}</p>
    </div>
  );
}

export default Chip;
