"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MgCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _index = require("../MgImage/index.jsx");

var _index2 = require("../Button/index.jsx");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel, {
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
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Item, null, /*#__PURE__*/_react.default.createElement("a", {
      href: link
    }, /*#__PURE__*/_react.default.createElement(_index.MgImage, {
      desktop: image.image,
      mobile: imageMobile.image
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Carousel.Caption, null, title && /*#__PURE__*/_react.default.createElement("h1", null, title), subtitle && /*#__PURE__*/_react.default.createElement("h4", null, subtitle), callToAction && /*#__PURE__*/_react.default.createElement(_index2.MgButton, {
      text: callToAction.label,
      fullWidth: false
    }))));
  }));
};

exports.MgCarousel = MgCarousel;