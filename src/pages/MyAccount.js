import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyAccountContent from '../components/myAccount/MyAccountContent';

const MyAccount = () => {
  const [userDatas, setUserDatas] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5000/user/userinfo',
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
        }
      } catch (error) {
        localStorage.clear();
        navigate('/login');
      }
    };
    getUser();
  }, [navigate]);

  return <MyAccountContent userDatas={userDatas} />;
};

export default MyAccount;
