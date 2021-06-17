"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));

require("./TextBlock.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextBlock = function TextBlock(Props) {
  var richText = Props.richText,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment,
      _Props$bold = Props.bold,
      bold = _Props$bold === void 0 ? false : _Props$bold;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-container align-".concat(alignment, " ").concat(bold ? "text-bold" : "")
  }, /*#__PURE__*/_react.default.createElement(_markdownToJsx.default, null, richText));
};

exports.TextBlock = TextBlock;