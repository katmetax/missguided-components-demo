"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBanner = void 0;

var _react = _interopRequireDefault(require("react"));

require("./TextBanner.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextBanner = function TextBanner(Props) {
  var _Props$textAlignment = Props.textAlignment,
      textAlignment = _Props$textAlignment === void 0 ? "center" : _Props$textAlignment,
      content = Props.content,
      link = Props.link,
      _Props$backgroundColo = Props.backgroundColor,
      backgroundColor = _Props$backgroundColo === void 0 ? "#FFA5B8" : _Props$backgroundColo;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: link
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: backgroundColor
    },
    className: "text-banner align-".concat(textAlignment)
  }, content.map(function (text) {
    return /*#__PURE__*/_react.default.createElement("p", {
      style: text.size && {
        fontSize: text.size
      }
    }, text.content);
  })));
};

exports.TextBanner = TextBanner;