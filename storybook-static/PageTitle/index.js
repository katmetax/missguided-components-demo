"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageTitle = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PageTitle.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTitle = function PageTitle(Props) {
  var text = Props.text,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "title-container align-".concat(alignment)
  }, /*#__PURE__*/_react.default.createElement("h1", null, text));
};

exports.PageTitle = PageTitle;