import React from 'react';
import "./Button.css"

function Button(props) {

    const { children, onClick, type, style } = props 

    return ( 
        <button className={style+"-btn"} onClick={onClick} type={type}>{children}</button>
    );
}

export default Button;