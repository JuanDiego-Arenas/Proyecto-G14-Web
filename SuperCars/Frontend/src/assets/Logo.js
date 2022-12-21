import React from 'react';
import './Logo.css';
import logo from './logo.png';

function Logo(props) {
    const { size, showText = true } = props;

    const style = {
        width: size,
        height: size,
    };

    return (
        <div className="flex logo">
            <img alt="Logo SuperCars" src={logo} style={style}></img>
            {showText ? <h1>SuperCars</h1> : null}
        </div>
    );
}

export default Logo;
