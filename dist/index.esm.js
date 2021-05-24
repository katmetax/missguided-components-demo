import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { Carousel } from 'react-bootstrap';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".title-container {\n  display: flex;\n  width: 100%; }\n  .title-container.align-left {\n    justify-content: flex-start; }\n  .title-container.align-right {\n    justify-content: flex-end; }\n  .title-container.align-center {\n    justify-content: center; }\n";
n(css,{});

var PageTitle = function PageTitle(Props) {
  var text = Props.text,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment;
  return /*#__PURE__*/React.createElement("div", {
    className: "title-container align-".concat(alignment)
  }, /*#__PURE__*/React.createElement("h1", null, text));
};

var css$1 = ".text-container {\n  display: flex; }\n  .text-container.align-left {\n    justify-content: flex-start; }\n  .text-container.align-right {\n    justify-content: flex-end; }\n  .text-container.align-center {\n    justify-content: center; }\n  .text-container.text-bold {\n    font-weight: bold; }\n";
n(css$1,{});

var TextBlock = function TextBlock(Props) {
  var richText = Props.richText,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment,
      _Props$bold = Props.bold,
      bold = _Props$bold === void 0 ? false : _Props$bold;
  return /*#__PURE__*/React.createElement("div", {
    className: "text-container align-".concat(alignment, " ").concat(bold ? "text-bold" : "")
  }, /*#__PURE__*/React.createElement(Markdown, null, richText));
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var css$2 = ".discount-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem; }\n  .discount-container .firstPart {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem; }\n    .discount-container .firstPart .text {\n      font-weight: bold;\n      font-size: 1.5rem;\n      margin-bottom: 0;\n      margin-top: 0; }\n  .discount-container .secondPart {\n    background: #e8e8e8;\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    cursor: pointer; }\n  .discount-container.align-left {\n    justify-content: flex-start; }\n  .discount-container.align-right {\n    justify-content: flex-end; }\n  .discount-container.align-center {\n    justify-content: center; }\n  .discount-container.text-bold {\n    font-weight: bold; }\n  .discount-container .thirdPart {\n    transition: all 0.7s;\n    overflow: hidden; }\n  .discount-container .accordion-open {\n    max-height: 600px;\n    padding: 1rem; }\n  .discount-container .accordion-closed {\n    max-height: 0px;\n    padding: 0; }\n  .discount-container .copy-to-clipboard {\n    border-radius: 50px;\n    background-color: white;\n    color: black;\n    min-width: 30px;\n    min-height: 30px;\n    font-size: 1.3rem;\n    margin-left: 1rem;\n    cursor: pointer; }\n    .discount-container .copy-to-clipboard:hover {\n      color: green;\n      background-color: #d0d0d0; }\n";
n(css$2,{});

var DiscountBox = function DiscountBox(Props) {
  var discountBoxTerms = Props.discountBoxTerms,
      discountBoxLink = Props.discountBoxLink,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment,
      discountBoxHeading = Props.discountBoxHeading,
      discountBoxCode = Props.discountBoxCode,
      discountBoxSubheading = Props.discountBoxSubheading,
      _Props$discountBoxBgC = Props.discountBoxBgColour,
      discountBoxBgColour = _Props$discountBoxBgC === void 0 ? "#fff3f1" : _Props$discountBoxBgC;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: discountBoxBgColour
    },
    className: "discount-container align-".concat(alignment)
  }, /*#__PURE__*/React.createElement("a", {
    href: discountBoxLink
  }, /*#__PURE__*/React.createElement("div", {
    className: "firstPart"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text"
  }, discountBoxHeading), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, discountBoxSubheading))), /*#__PURE__*/React.createElement("div", {
    className: "secondPart"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setIsOpen(function (prevState) {
        return !prevState;
      });
    }
  }, "ts&cs"), /*#__PURE__*/React.createElement("div", null, discountBoxCode ? /*#__PURE__*/React.createElement("div", null, discountBoxCode, " ", /*#__PURE__*/React.createElement("button", {
    className: "copy-to-clipboard"
  }, "\u274F")) : "No code required")), /*#__PURE__*/React.createElement("div", {
    className: "thirdPart accordion-".concat(isOpen ? "open" : "closed")
  }, /*#__PURE__*/React.createElement(Markdown, null, discountBoxTerms)));
};

var css$3 = ".text-banner {\n  text-align: center;\n  font-size: 18px;\n  padding: 25px;\n  font-weight: bold; }\n  .text-banner p {\n    margin: 0; }\n\na, a:hover {\n  text-decoration: none;\n  color: black; }\n";
n(css$3,{});

var TextBanner = function TextBanner(Props) {
  var _Props$textAlignment = Props.textAlignment,
      textAlignment = _Props$textAlignment === void 0 ? "center" : _Props$textAlignment,
      content = Props.content,
      link = Props.link,
      _Props$backgroundColo = Props.backgroundColor,
      backgroundColor = _Props$backgroundColo === void 0 ? "#FFA5B8" : _Props$backgroundColo;
  return /*#__PURE__*/React.createElement("a", {
    href: link
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: backgroundColor
    },
    className: "text-banner align-".concat(textAlignment)
  }, content.map(function (text) {
    return /*#__PURE__*/React.createElement("p", {
      style: text.size && {
        fontSize: text.size
      }
    }, text.content);
  })));
};

var css$4 = ".mg-button {\n  font-family: \"Missguided\", Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: lowercase;\n  min-width: 100px;\n  background-color: #000;\n  color: #f7f6fa;\n  transition: background-color, 0.3s, color, 0.3s;\n  border: 1px solid #000;\n  display: inline-block;\n  font-size: 14px;\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 0.9375rem 1.25rem;\n  line-height: 1;\n  cursor: pointer; }\n  .mg-button.full-width {\n    width: 100%; }\n\n.mg-button:not(.inverted):not(.disabled):hover {\n  text-decoration: none;\n  background-color: #474747;\n  border-color: #474747;\n  color: #f7f6fa; }\n\n.disabled {\n  border-color: #b0b0b0;\n  background-color: #b0b0b0;\n  color: #e8e8e8; }\n\n.inverted:not(:hover) {\n  background-color: white;\n  color: #101013; }\n";
n(css$4,{});

var MgButton = function MgButton(Props) {
  var text = Props.text,
      _Props$onAction = Props.onAction,
      onAction = _Props$onAction === void 0 ? function () {} : _Props$onAction;
      Props.bold;
      var _Props$inverted = Props.inverted,
      inverted = _Props$inverted === void 0 ? false : _Props$inverted,
      _Props$disabled = Props.disabled,
      disabled = _Props$disabled === void 0 ? false : _Props$disabled,
      _Props$fullWidth = Props.fullWidth,
      fullWidth = _Props$fullWidth === void 0 ? true : _Props$fullWidth;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    className: classNames({
      "mg-button": true,
      inverted: inverted,
      disabled: disabled,
      "full-width": fullWidth
    })
  }, text);
};

var css$5 = ".mg-image img {\n  width: 100%; }\n";
n(css$5,{});

var getImageUrl = function getImageUrl(image) {
  var url = "https://".concat(image.defaultHost, "/i/").concat(image.endpoint, "/").concat(image.name);
  return url;
};

var getSourceSet = function getSourceSet(url) {
  var source = [{
    srcSet: "".concat(url, "?fmt=webp 390w"),
    type: 'image/webp'
  }, {
    srcSet: "".concat(url, "?fmt=jpeg 390w"),
    type: 'image/jpeg'
  }];
  return source;
};

var MgImage = function MgImage(_ref) {
  var desktop = _ref.desktop,
      mobile = _ref.mobile;
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
  var mobileImage = desktop ? getImageUrl(desktop) : getImageUrl(mobile);
  var srcSet = getSourceSet(mobileImage);
  console.log(mobileImage, srcSet);

  var renderSource = function renderSource(source, i) {
    return /*#__PURE__*/React.createElement("source", {
      key: "".concat(source.type).concat(i) // media={source.mediaQuery}
      ,
      srcSet: source.srcSet,
      type: source.type
    });
  };

  if (!desktop || !mobileImage) {
    return /*#__PURE__*/React.createElement("img", {
      alt: ""
    });
  }

  return /*#__PURE__*/React.createElement("picture", {
    className: "mg-image"
  }, srcSet.map(renderSource), /*#__PURE__*/React.createElement("img", {
    src: mobileImage,
    alt: ""
  }));
};

var css$6 = ".carousel {\n  position: relative; }\n\n.carousel.pointer-event {\n  touch-action: pan-y; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-item {\n      transition: none; } }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%); }\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-fade .active.carousel-item-left,\n    .carousel-fade .active.carousel-item-right {\n      transition: none; } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-control-prev,\n    .carousel-control-next {\n      transition: none; } }\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: 0.9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: 50% / 100% 100% no-repeat; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: .5;\n    transition: opacity 0.6s ease; }\n    @media (prefers-reduced-motion: reduce) {\n      .carousel-indicators li {\n        transition: none; } }\n  .carousel-indicators .active {\n    opacity: 1; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.carousel {\n  margin-bottom: 7rem; }\n  .carousel ol.carousel-indicators li {\n    width: 14px;\n    height: 14px;\n    border-radius: 18px;\n    border-bottom: unset;\n    border-top: unset;\n    background-clip: border-box;\n    background-clip: initial;\n    margin: 0 8px;\n    background-color: #404040;\n    opacity: 1; }\n    .carousel ol.carousel-indicators li.active {\n      background-color: white; }\n  .carousel .carousel-inner .carousel-item .carousel-caption {\n    position: absolute;\n    right: unset;\n    bottom: 50%;\n    left: unset;\n    padding-top: unset;\n    padding-bottom: unset;\n    width: 100%; }\n    .carousel .carousel-inner .carousel-item .carousel-caption h4 {\n      margin: 20px 0; }\n    .carousel .carousel-inner .carousel-item .carousel-caption button {\n      margin: 20px 0; }\n      .carousel .carousel-inner .carousel-item .carousel-caption button:hover {\n        cursor: pointer; }\n";
n(css$6,{});

var MgCarousel = function MgCarousel(Props) {
  var _Props$items = Props.items,
      items = _Props$items === void 0 ? [] : _Props$items,
      _Props$rotationInterv = Props.rotationInterval,
      rotationInterval = _Props$rotationInterv === void 0 ? null : _Props$rotationInterv,
      _Props$controls = Props.controls,
      controls = _Props$controls === void 0 ? false : _Props$controls,
      _Props$slide = Props.slide,
      slide = _Props$slide === void 0 ? true : _Props$slide,
      _Props$touch = Props.touch,
      touch = _Props$touch === void 0 ? true : _Props$touch;
  return /*#__PURE__*/React.createElement(Carousel, {
    fade: true,
    controls: controls,
    interval: rotationInterval,
    slide: slide,
    touch: touch
  }, items.map(function (_ref) {
    var link = _ref.link,
        image = _ref.image,
        imageMobile = _ref.imageMobile,
        title = _ref.title,
        subtitle = _ref.subtitle,
        callToAction = _ref.callToAction;
    return /*#__PURE__*/React.createElement(Carousel.Item, null, /*#__PURE__*/React.createElement("a", {
      href: link
    }, /*#__PURE__*/React.createElement(MgImage, {
      desktop: image.image,
      mobile: imageMobile.image
    }), /*#__PURE__*/React.createElement(Carousel.Caption, null, title && /*#__PURE__*/React.createElement("h1", null, title), subtitle && /*#__PURE__*/React.createElement("h4", null, subtitle), callToAction && /*#__PURE__*/React.createElement(MgButton, {
      text: callToAction.label,
      fullWidth: false
    }))));
  }));
};

var css$7 = ".category-carousel {\n  display: flex;\n  overflow-x: auto;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 1060px;\n  padding-right: 40px;\n  padding-left: 20px;\n  margin: 0 auto; }\n  .category-carousel a {\n    margin-right: 1rem; }\n  .category-carousel img {\n    width: 200px; }\n  .category-carousel h2 {\n    text-align: center;\n    width: 100%;\n    font-size: 2rem; }\n  .category-carousel h3 {\n    text-align: center; }\n  .category-carousel--items {\n    width: 100%;\n    flex-direction: row;\n    display: flex;\n    justify-content: center; }\n  @media (max-width: 660px) {\n    .category-carousel img {\n      width: 38vw; } }\n  .category-carousel::-webkit-scrollbar {\n    display: none; }\n  .category-carousel {\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n";
n(css$7,{});

var CategoryCarousel = function CategoryCarousel(props) {
  var items = props.items,
      title = props.title;
  return /*#__PURE__*/React.createElement("div", {
    className: "category-carousel"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("div", {
    className: "category-carousel--items"
  }, items.map(function (_ref) {
    var image = _ref.image,
        title = _ref.title,
        link = _ref.link;
    return /*#__PURE__*/React.createElement("a", {
      href: link
    }, /*#__PURE__*/React.createElement(MgImage, {
      desktop: image
    }), /*#__PURE__*/React.createElement("h3", null, title));
  })));
};

var css$8 = ".blog-carousel {\n  display: flex;\n  overflow-x: auto;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 1060px;\n  padding-right: 40px;\n  padding-left: 20px;\n  margin: 0 auto;\n  margin-top: 60px;\n  margin-bottom: 60px; }\n  .blog-carousel a {\n    display: flex;\n    flex-direction: column;\n    margin-right: 2rem;\n    max-width: 295px;\n    text-align: center; }\n  .blog-carousel img {\n    width: 295px;\n    max-height: 295px;\n    object-fit: cover; }\n  .blog-carousel h2 {\n    text-align: center;\n    width: 100%;\n    font-size: 1.8em; }\n  .blog-carousel h3 {\n    text-align: center; }\n  .blog-carousel--items {\n    width: 100%;\n    flex-direction: row;\n    display: flex;\n    justify-content: center; }\n  @media (max-width: 660px) {\n    .blog-carousel img {\n      width: 38vw; } }\n  .blog-carousel::-webkit-scrollbar {\n    display: none; }\n  .blog-carousel {\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n";
n(css$8,{});

var BlogCarousel = function BlogCarousel(props) {
  var items = props.items;
  return /*#__PURE__*/React.createElement("div", {
    className: "blog-carousel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-carousel--items"
  }, items.map(function (_ref) {
    var image = _ref.image,
        title = _ref.title,
        subtitle = _ref.subtitle,
        link = _ref.link;
    return /*#__PURE__*/React.createElement("a", {
      href: link
    }, /*#__PURE__*/React.createElement(MgImage, {
      desktop: image
    }), /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("h4", null, subtitle), /*#__PURE__*/React.createElement(MgButton, {
      text: "Click Me",
      fullWidth: false
    }));
  })));
};

var DiscountBoxes = function DiscountBoxes(Props) {
  var codes = Props.codes;
  return /*#__PURE__*/React.createElement("div", null, codes.map(function (code) {
    return /*#__PURE__*/React.createElement(DiscountBox, code);
  }));
};

export { BlogCarousel, CategoryCarousel, DiscountBox, DiscountBoxes, MgButton, MgCarousel, MgImage, PageTitle, TextBanner, TextBlock };
