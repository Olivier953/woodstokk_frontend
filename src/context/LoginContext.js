import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const LoginLoading = createContext('');

const LoginContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentToken = localStorage.getItem('token');

    if (currentToken && currentToken !== undefined) {
      /*
        - decoder le token 
        - prendre la date d'expiration 
        - si le token a expiré => setislogin(false) 
      */
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = {
    loading: { get: loading, set: setLoading },
    isLoggedIn: { get: isLoggedIn, set: setIsLoggedIn },
  };

  return (
    <>
      <LoginLoading.Provider value={[login]}>{children}</LoginLoading.Provider>
    </>
  );
};

export default LoginContext;
