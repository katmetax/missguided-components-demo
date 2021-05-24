import React from "react";
import "./styles.scss";

const getImageUrl = (image) => {
  const url = `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`;
  return url;
};

const getSourceSet = (url)=> {
  const source = [
    {
      srcSet: `${url}?fmt=webp 390w`,
      type: 'image/webp'
    },
    {
      srcSet: `${url}?fmt=jpeg 390w`,
      type: 'image/jpeg'
    }
  ];
  return source;
};

export const MgImage = ({ desktop, mobile }) => {

  const mobileImage = desktop ? getImageUrl(desktop) : getImageUrl(mobile);
  const srcSet = getSourceSet(mobileImage);

  const renderSource = (source, i) => (
    <source
      key={`${source.type}${i}`}
      srcSet={source.srcSet}
      type={source.type}
    />
  );

  if (!desktop || !mobileImage) {
    return <img alt="" />;
  }

  return (
    <picture className="mg-image">
      {srcSet.map(renderSource)}
      <img src={mobileImage} alt="" />
    </picture>
  );
};
