import React from 'react';

function Input(props) {
    const { type, onChange, placeholder, children } = props;

    return (
        <label className="input">
            <b>{children}</b>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            ></input>
        </label>
    );
}

export default Input;
