"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MgImage = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var mobileImage = desktop ? getImageUrl(desktop) : getImageUrl(mobile);
  var srcSet = getSourceSet(mobileImage);

  var renderSource = function renderSource(source, i) {
    return /*#__PURE__*/_react.default.createElement("source", {
      key: "".concat(source.type).concat(i),
      srcSet: source.srcSet,
      type: source.type
    });
  };

  if (!desktop || !mobileImage) {
    return /*#__PURE__*/_react.default.createElement("img", {
      alt: ""
    });
  }

  return /*#__PURE__*/_react.default.createElement("picture", {
    className: "mg-image"
  }, srcSet.map(renderSource), /*#__PURE__*/_react.default.createElement("img", {
    src: mobileImage,
    alt: ""
  }));
};

exports.MgImage = MgImage;