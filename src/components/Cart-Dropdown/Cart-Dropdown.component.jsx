import React from "react";

import "./Cart-Dropdown.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button.component";

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
