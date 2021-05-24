import React from "react";
import { MgImage } from "../MgImage/index.jsx";
import "./styles.scss";

export const CategoryCarousel = (props) => {
  const { items, title } = props;

  return (
    <div className="category-carousel">
      <h2>{title}</h2>
      <div className="category-carousel--items">
      {items.map(({ image, title, link }) => {
        return (
          <a href={link}>
            <MgImage desktop={image} />
            <h3>{title}</h3>
          </a>
        );
      })}
      </div>
    </div>
  );
};
