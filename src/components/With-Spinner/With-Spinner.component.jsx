import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./With-Spinner.styles";

const WithSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};
export default WithSpinner;
