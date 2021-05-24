import React from "react";
import Markdown from 'markdown-to-jsx';
import "./TextBlock.scss";

export const TextBlock = (Props) => {
  const { richText, alignment = "center", bold = false } = Props;

  return (
    <div
      className={`text-container align-${alignment} ${bold ? "text-bold" : ""}`}
    > 
      <Markdown>{richText}</Markdown>
    </div>
  );
};
