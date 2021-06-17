"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../Button/index.jsx");

var _index2 = require("../MgImage/index.jsx");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogCarousel = function BlogCarousel(props) {
  var items = props.items;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blog-carousel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blog-carousel--items"
  }, items.map(function (_ref) {
    var image = _ref.image,
        title = _ref.title,
        subtitle = _ref.subtitle,
        link = _ref.link;
    return /*#__PURE__*/_react.default.createElement("a", {
      href: link
    }, /*#__PURE__*/_react.default.createElement(_index2.MgImage, {
      desktop: image
    }), /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("h4", null, subtitle), /*#__PURE__*/_react.default.createElement(_index.MgButton, {
      text: "Click Me",
      fullWidth: false
    }));
  })));
};

exports.BlogCarousel = BlogCarousel;