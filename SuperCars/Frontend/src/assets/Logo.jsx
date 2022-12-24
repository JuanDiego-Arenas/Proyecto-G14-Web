import React from 'react';
import './Logo.css';
import logo from './logo.svg';

function Logo(props) {
    const { size, high, showText = true } = props;

    const style = {
        width: size,
        height: high,
    };

    return (
        <div className="logo flex">
            <img alr='Logo SuperCars' src={logo} style={style}></img>
            {showText ? <h1 className='text'>SuperCars</h1> : null}
        </div>
    );
}

export default Logo;
