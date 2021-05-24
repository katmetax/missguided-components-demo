import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import "./DiscountBox.scss";

export const DiscountBox = (Props) => {
  const {
    discountBoxTerms,
    discountBoxLink,
    alignment = "center",
    discountBoxHeading,
    discountBoxCode,
    discountBoxSubheading,
    discountBoxBgColour = "#fff3f1",
  } = Props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: discountBoxBgColour }}
      className={`discount-container align-${alignment}`}
    >
      <a href={discountBoxLink}>
        <div className="firstPart">
          <p className="text">{discountBoxHeading}</p>
          <p className="description">{discountBoxSubheading}</p>
        </div>
      </a>
      <div className="secondPart">
        <div onClick={() => setIsOpen((prevState) => !prevState)}>
          ts&amp;cs
        </div>
        <div>
          {discountBoxCode ? (
            <div>
              {discountBoxCode} <button className="copy-to-clipboard">&#10063;</button>
            </div>
          ) : (
            "No code required"
          )}
        </div>
      </div>
      <div className={`thirdPart accordion-${isOpen ? "open" : "closed"}`}>
        <Markdown>{discountBoxTerms}</Markdown>
      </div>
    </div>
  );
};
