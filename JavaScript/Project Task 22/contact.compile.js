"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Contact extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    var login = /*#__PURE__*/_react.default.createElement("form", {
      action: "#",
      onSubmit: this.authorize
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      placeholder: "Password"
    }), /*#__PURE__*/_react.default.createElement("input", {
      type: "submit"
    }));

    const contactInfo = /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "client@example.com"), /*#__PURE__*/_react.default.createElement("li", null, "555.555.5555"));

    return /*#__PURE__*/_react.default.createElement("div", {
      id: "authorization"
    }, /*#__PURE__*/_react.default.createElement("h1", null, this.state.authorized == true ? "Contact" : "Enter the Password"), /*#__PURE__*/_react.default.createElement("div", null, this.state.authorized == true ? contactInfo : login));
  }

}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(Contact, null), document.getElementById('app'));
