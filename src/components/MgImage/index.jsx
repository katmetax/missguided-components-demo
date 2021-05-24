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
  // let mobileBreakPoints = [300, 402, 491, 569, 639, 711, 756, 767];
  // let desktopBreakPoints = [
  //   768,
  //   937,
  //   1086,
  //   1226,
  //   1353,
  //   1474,
  //   1582,
  //   1686,
  //   1792,
  //   1905,
  // ];

  const mobileImage = desktop ? getImageUrl(desktop) : getImageUrl(mobile);
  const srcSet = getSourceSet(mobileImage);
console.log(mobileImage, srcSet)
  const renderSource = (source, i) => (
    <source
      key={`${source.type}${i}`}
      // media={source.mediaQuery}
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
