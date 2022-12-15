import React from "react";
import "./forms.css";

function Button(props) {
    const { children, onClick, type } = props;

    return (
        <button className="button" onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Button;
