import React from "react";
import { connect } from "react-redux";

import "./Cart-Dropdown.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button.component";
import CartItem from "../Cart-Item/Cart-Item.component";
import { selectCartItems } from "../../redux/Cart/Cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
