import React from "react";

import "./Custom-Button.styles.scss";

const CustomButtom = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : " "} ${
        isGoogleSignIn ? "google-sign-in" : " "
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButtom;
