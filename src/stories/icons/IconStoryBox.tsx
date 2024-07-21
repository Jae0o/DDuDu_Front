import React from "react";

interface IconBoxProps {
  children: React.ReactNode;
}

const IconStoryBox = ({ children }: IconBoxProps) => {
  return (
    <article
      style={{
        width: "8rem",
        height: "8rem",
        border: "2px solid grey",
        borderRadius: "0.8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </article>
  );
};

export default IconStoryBox;