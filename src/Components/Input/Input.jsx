import React from "react";

import style from "./input.module.css";

const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            name="nameofList"
            className={style.input}
        />
    );
};

export default Input;
