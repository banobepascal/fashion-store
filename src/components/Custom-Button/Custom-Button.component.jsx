import React from "react";

import "./Custom-Button.styles.scss";

const CustomButtom = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButtom;
