"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("button", {
      className: this.props.light ? 'light-button' : 'dark-button'
    }, "Refresh");
  }

}

exports.Button = Button;
