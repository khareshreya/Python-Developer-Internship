"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Button = _interopRequireDefault(require("./Button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Random extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [54, 123, 69]
    };
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];

    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }

    return random;
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
      className: this.isLight() ? 'white' : 'black'
    }, "Your color is ", this.formatColor(this.state.color), "."));
  }

}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(Random, null), document.getElementById('app'));
