import React, { Component } from "react";

const pStyle = {
  padding: "1rem",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
};

class Footer extends Component {   // class tip ile yazilmis bir component.     
  render() {
    return (
      <div>
        <p style={pStyle}>Copyright {new Date().getFullYear()}</p>
      </div>
    );
  }
}

export default Footer;

