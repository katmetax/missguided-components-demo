"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../MgImage/index.jsx");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryCarousel = function CategoryCarousel(props) {
  var items = props.items,
      title = props.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "category-carousel"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "category-carousel--items"
  }, items.map(function (_ref) {
    var image = _ref.image,
        title = _ref.title,
        link = _ref.link;
    return /*#__PURE__*/_react.default.createElement("a", {
      href: link
    }, /*#__PURE__*/_react.default.createElement(_index.MgImage, {
      desktop: image
    }), /*#__PURE__*/_react.default.createElement("h3", null, title));
  })));
};

exports.CategoryCarousel = CategoryCarousel;