import React from "react";

import "./Logo.css";

// @ts-ignore
import logo from "./logo_supercars.png";

function Logo(props) {
  const { size, showText = true } = props;

  const style = {
    width: size,
    height: size,
  };

  return (
    <div className="flex logo">
      <img src={logo} style={style} alt="logo SuperCars"></img>
      {showText ? <h1>SuperCars</h1> : null}
    </div>
  );
}

export default Logo;
