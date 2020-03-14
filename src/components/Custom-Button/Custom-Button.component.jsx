import React from "react";

import { CustomButtonContainer } from "./Custom-Button.styles";

const CustomButtom = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButtom;
