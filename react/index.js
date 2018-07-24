"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withRipple = function withRipple(Wcomp) {
  return function (props) {
    var _props$tmripple = props.tmripple,
        color = _props$tmripple.color,
        eventName = _props$tmripple.eventName;

    return _react2.default.createElement(Wcomp, {
      onClick: function onClick(e) {
        _index.ripple.call(undefined, e, color, eventName);
        props.onClick && props.onClick.call(undefined, e);
      }
    });
  };
};

exports.default = withRipple;
