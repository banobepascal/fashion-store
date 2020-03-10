import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import CheckOutItem from '../../components/Checkout-Item/Checkout-Item.component'; 

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/Cart/Cart.selectors";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-blocks'>
          <span>Product</span>
        </div>
        <div className='header-blocks'>
          <span>Description</span>
        </div>
        <div className='header-blocks'>
          <span>Quantity</span>
        </div>
        <div className='header-blocks'>
          <span>Price</span>
        </div>
        <div className='header-blocks'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => 
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckOutPage);
