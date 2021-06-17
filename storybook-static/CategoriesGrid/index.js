"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesGrid = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../CategoryItem/index.jsx");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoriesGrid = function CategoriesGrid(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-grid__items"
  }, Object.values(props).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_index.CategoryItem, item);
  })));
};

exports.CategoriesGrid = CategoriesGrid;