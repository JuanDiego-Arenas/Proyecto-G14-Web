import React from "react";
import "./forms.css";

function Input(props) {
    const { type, onChange } = props;

    return <input className="input" type={type} onChange={onChange}></input>;
}

export default Input;
