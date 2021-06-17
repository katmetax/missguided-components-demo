"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MgButton = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.scss");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MgButton = function MgButton(Props) {
  var text = Props.text,
      _Props$onAction = Props.onAction,
      onAction = _Props$onAction === void 0 ? function () {} : _Props$onAction,
      _Props$bold = Props.bold,
      bold = _Props$bold === void 0 ? false : _Props$bold,
      _Props$inverted = Props.inverted,
      inverted = _Props$inverted === void 0 ? false : _Props$inverted,
      _Props$disabled = Props.disabled,
      disabled = _Props$disabled === void 0 ? false : _Props$disabled,
      _Props$fullWidth = Props.fullWidth,
      fullWidth = _Props$fullWidth === void 0 ? true : _Props$fullWidth;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onAction,
    className: (0, _classnames.default)({
      "mg-button": true,
      inverted: inverted,
      disabled: disabled,
      "full-width": fullWidth
    })
  }, text);
};

exports.MgButton = MgButton;