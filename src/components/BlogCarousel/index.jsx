import React from "react";
import { MgButton } from "../Button/index.jsx";
import { MgImage } from "../MgImage/index.jsx";
import "./styles.scss";

export const BlogCarousel = (props) => {
  const { items } = props;

  return (
    <div className="blog-carousel">
      <div className="blog-carousel--items">
      {items.map(({ image, title, subtitle, link }) => {
        return (
          <a href={link}>
            <MgImage desktop={image} />
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <MgButton text="Click Me" fullWidth={false} />
          </a>
        );
      })}
      </div>
    </div>
  );
};
