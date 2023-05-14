import { useCallback, useContext, useState } from 'react';
import LoginContent from '../components/login/LoginContent';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LoginLoading } from '../context/LoginContext';

const Login = () => {
  const [login] = useContext(LoginLoading);
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleLogin = useCallback(
    ({ target }) => {
      setFields({
        ...fields,
        [target.name]: target.value,
      });
    },
    [fields]
  );

  const ifFieldsCorrect = () => {
    let proceed = true;
    let errorMessage = 'Please enter a';
    if (fields.email === null || fields.email === '') {
      proceed = false;
      errorMessage += ' email';
    }
    if (fields.password === null || fields.password === '') {
      proceed = false;
      errorMessage += ' password';
    }
    if (!proceed) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fields.email)) {
      } else {
        proceed = false;
        toast.warning('Please enter a valid email');
      }
    }
    return proceed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ifFieldsCorrect()) {
      try {
        login.loading.set(true);
        const response = await axios.post('http://localhost:5000/user/login', {
          ...fields,
        });
        login.loading.set(false);
        if (response.data.success) {
          toast.success(response.data.message);
          localStorage.setItem('token', response.data.data);
          setTimeout(() => {
            window.location.href = '/myaccount';
          }, 1000);
          login.isLoggedIn.set(true);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        login.loading.set(false);
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <LoginContent
      fields={fields}
      handleLogin={handleLogin}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
