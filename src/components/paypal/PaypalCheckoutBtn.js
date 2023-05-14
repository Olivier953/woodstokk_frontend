import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export const PaypalCheckoutBtn = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = () => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert('thank you for you purchase');
  } else if (error) {
    alert(error);
  }

  return (
    <div className="checkout_btn">
      <PayPalButtons
        onClick={(data, actions) => {
          const hasAlreadyBoughtCourse = false;
          if (hasAlreadyBoughtCourse) {
            setError('You already bought this course!');
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'product',
                amount: {
                  value: 1,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log('order', order);
          handleApprove(data.orderID);
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.error('Paypal Checkout on Error', err);
        }}
      />
    </div>
  );
};
