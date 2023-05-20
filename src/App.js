import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyAccount from './pages/MyAccount';
import { useContext } from 'react';
import { LoginLoading } from './context/LoginContext';
import SingleProduct from './pages/SingleProduct';
import Favorite from './pages/Favorite';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import About from './pages/About';

function App() {
  const HomeComponent = Layout(Home);
  const ProductsComponent = Layout(Products);
  const AboutComponent = Layout(About);
  const LoginComponent = Layout(Login);
  const RegisterComponent = Layout(Register);
  const MyAccountComponent = Layout(MyAccount);
  const SingleProductComponent = Layout(SingleProduct);
  const FavoriteComponent = Layout(Favorite);
  const CartComponent = Layout(Cart);
  const CheckoutComponent = Layout(Checkout);

  const [login] = useContext(LoginLoading);
  return (
    <BrowserRouter>
      {login.loading.get && (
        <div className="spinner-parent">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/myaccount" element={<MyAccountComponent />} />
        <Route path="/product/:id" element={<SingleProductComponent />} />
        <Route path="/favorite" element={<FavoriteComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/checkout" element={<CheckoutComponent />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
