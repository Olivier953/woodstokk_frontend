import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import LoginContext from './context/LoginContext';
import ApiContext from './context/ApiContext';
import ShoppingCartContext from './context/ShoppingCartContext';
import { FavoriteContext } from './context/FavoriteContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContext>
    <ApiContext>
      <ShoppingCartContext>
        <FavoriteContext>
          <PayPalScriptProvider>
            <App />
          </PayPalScriptProvider>
        </FavoriteContext>
      </ShoppingCartContext>
    </ApiContext>
  </LoginContext>
);
