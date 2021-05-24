import React from "react";
import "./TextBanner.scss";

export const TextBanner = (Props) => {
  const {
    textAlignment = "center",
    content,
    link,
    backgroundColor = "#FFA5B8",
  } = Props;

  return (
    <a href={link}>
      <div
        style={{ backgroundColor }}
        className={`text-banner align-${textAlignment}`}
      >
        {content.map((text) => (
          <p style={text.size && { fontSize: text.size }}>{text.content}</p>
        ))}
      </div>
    </a>
  );
};
