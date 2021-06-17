import React from "react";
import { MgImage } from "../MgImage/index.jsx";
import "./styles.scss";

export const CategoryItem = ({ buttonText, title, image, categoryLink }) => (
  <div className="category-item">
    <a className="category-item__link" href={categoryLink}>
      <MgImage desktop={image} />
      <h2 className="category-item__title">{title}</h2>
      <button className="category-item__button" type="button">
        {buttonText}
      </button>
    </a>
  </div>
);
