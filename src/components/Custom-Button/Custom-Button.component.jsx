import React from "react";

import "./Custom-Button.styles.scss";

const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButtom;
