import React from "react";
import { CategoryItem } from "../CategoryItem/index.jsx";
import "./styles.scss";

export const CategoriesGrid = (props) => (
  <div className="categories-grid">
    <div className="categories-grid__items">
      {Object.values(props).map((item) => (
        <CategoryItem {...item} />
      ))}
    </div>
  </div>
);
