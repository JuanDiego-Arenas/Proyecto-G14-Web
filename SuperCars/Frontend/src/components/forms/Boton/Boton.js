import React from 'react';
import "./Boton.css"

function Boton(props) {

    const { children, onClick, type, style } = props 

    return ( 
        <button className={style+"-btn"} onClick={onClick} type={type}>{children}</button>
    );
}

export default Boton;