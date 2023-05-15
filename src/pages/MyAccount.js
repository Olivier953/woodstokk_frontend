import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyAccountContent from '../components/myAccount/MyAccountContent';
import { LoginLoading } from '../context/LoginContext';

const MyAccount = () => {
  const [userDatas, setUserDatas] = useState('');
  const [login] = useContext(LoginLoading);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.post(
          'https://woodstokk-back.onrender.com/user/userinfo',
          { token: localStorage.getItem('token') },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        if (response) {
          setUserDatas(response.data.data);
        } else {
          localStorage.clear();
          navigate('/login');
          login.loading.set(false);
        }
      } catch (error) {
        localStorage.clear();
        navigate('/login');
        login.loading.set(false);
      }
    };
    getUser();
  }, [navigate, login.loading]);

  console.log(userDatas)

  return <MyAccountContent userDatas={userDatas} />;
};

export default MyAccount;


