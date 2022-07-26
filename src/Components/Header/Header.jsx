import React from "react";

import style from "./header.module.css";

const Header = ({ children }) => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>{children}</h1>
    </div>
  );
};

export default Header;
