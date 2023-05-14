import React from 'react';
import { PaypalCheckoutBtn } from '../components/paypal/PaypalCheckoutBtn';

export const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <PaypalCheckoutBtn />
    </div>
  );
};
