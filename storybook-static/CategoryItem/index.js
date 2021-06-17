"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../MgImage/index.jsx");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryItem = function CategoryItem(_ref) {
  var buttonText = _ref.buttonText,
      title = _ref.title,
      image = _ref.image,
      categoryLink = _ref.categoryLink;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "category-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "category-item__link",
    href: categoryLink
  }, /*#__PURE__*/_react.default.createElement(_index.MgImage, {
    desktop: image
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "category-item__title"
  }, title), /*#__PURE__*/_react.default.createElement("button", {
    className: "category-item__button",
    type: "button"
  }, buttonText)));
};

exports.CategoryItem = CategoryItem;