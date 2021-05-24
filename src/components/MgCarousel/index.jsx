import React from "react";
import { Carousel } from "react-bootstrap";
import { MgImage } from "../MgImage/index.jsx";
import { MgButton } from "../Button/index.jsx";
import "./styles.scss";

export const MgCarousel = (Props) => {
  const { items = [], rotationInterval = null, controls = false, slide = true , touch = true } = Props;

  return (
    <Carousel fade controls={controls} interval={rotationInterval} slide={slide} touch={touch}>
      {items.map(
        ({ link, image, imageMobile, title, subtitle, callToAction }) => (
          <Carousel.Item>
            <a href={link}>
              <MgImage desktop={image.image} mobile={imageMobile.image} />
              <Carousel.Caption>
                {title && <h1>{title}</h1>}
                {subtitle && <h4>{subtitle}</h4>}
                {callToAction && (
                  <MgButton text={callToAction.label} fullWidth={false} />
                )}
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
};
