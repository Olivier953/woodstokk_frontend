import { useCallback, useContext, useState } from 'react';
import axios from 'axios';
import RegisterContent from '../components/login/RegisterContent';
import { toast } from 'react-toastify';
import { LoginLoading } from '../context/LoginContext';

const Register = () => {
  const [login] = useContext(LoginLoading);
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleRegister = useCallback(
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
    if (fields.firstName === null || fields.firstName === '') {
      proceed = false;
      errorMessage += ' first name';
    }
    if (fields.lastName === null || fields.lastName === '') {
      proceed = false;
      errorMessage += ' last name';
    }
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
        const response = await axios.post(
          'https://woodstokk-back.onrender.com/user/register',
          { ...fields }
        );
        login.loading.set(false);
        if (response.data.success) {
          toast.success(response.data.message);
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
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
    <RegisterContent
      fields={fields}
      handleRegister={handleRegister}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;
