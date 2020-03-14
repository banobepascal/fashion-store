import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/Checkout-Item/Checkout-Item.component";
import StripeCheckoutButton from "../../components/Stripe-Button/Stripe-Button.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/Cart/Cart.selectors";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "./checkout.styles";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckOutPage);
