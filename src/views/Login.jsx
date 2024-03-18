import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Netflix from '../assets/Netflix.png';
import background from '../assets/background.jpeg';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { username, password } = useSelector(state => state.user); // Redux store'dan kullanıcı bilgilerini al
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Redux store'dan giriş durumunu al

//   const handleUsernameChange = (e) => {
//     dispatch({ type: 'SET_USERNAME', payload: e.target.value }); // Redux store'a kullanıcı adı güncelleme eylemini gönder
//   };

//   const handlePasswordChange = (e) => {
//     dispatch({ type: 'SET_PASSWORD', payload: e.target.value }); // Redux store'a şifre güncelleme eylemini gönder
//   };

//   const handleLogin = async () => {
//     Kullanıcı giriş eylemini Redux store'a gönder
//     dispatch({ type: 'LOGIN' });
  
//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': ""
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       });
//       console.log(username,)
//       if (response.ok) {
//         API yanıtı burada işlenir
//         const data = await response.json();
//         Kullanıcı girişi başarılı oldu, isLoggedIn durumunu güncelle
//         dispatch({ type: 'SET_LOGGED_IN', payload: true });
//         Kullanıcıyı yönlendir
//         navigate('/Profiles');
       
        
//       } else {
//         Kullanıcı girişi başarısız, hata mesajını göster
//         alert('Kullanıcı adı veya şifre yanlış.');
//       }
//     } catch (error) {
//       Hata durumu
//       console.error('API ile iletişim sırasında bir hata oluştu:', error);
//       Hata durumunda kullanıcıya uygun bir mesaj göstermek isteyebilirsiniz
//       alert('Bir hata oluştu, lütfen tekrar deneyin.');
//     }
//   };
  
  
  
  
  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = () => {
      // Kullanıcı giriş işlemini burada gerçekleştir
      if (username === 'emre' && password === '123') {
        // Giriş başarılı, isLoggedIn durumunu güncelle
        dispatch({ type: 'SET_LOGGED_IN', payload: true });
        // Kullanıcıyı yönlendir
        navigate('/Profiles');
      } else {
        // Kullanıcı adı veya şifre yanlış
        alert('Kullanıcı adı veya şifre yanlış.');
      }
    };
  

  return (
    <div className='w-screen h-screen' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img src={Netflix} alt="" className='pl-8 pt-8' />
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '300px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: '150px', borderRadius: '10px', padding: '20px' }}>
        <label htmlFor="username" style={{ color: 'white', marginBottom: '15px' }}>
          Kullanıcı adı
          <input type="text" style={{ width: '250px', padding: '10px', borderRadius: '5px', color: 'black' }} value={username} onChange={handleUsernameChange} />
        </label>
        <label htmlFor="password" style={{ color: 'white', marginBottom: '15px' }}>
          Şifre
          <input type="password" style={{ width: '250px', padding: '10px', borderRadius: '5px', color: 'black' }} value={password} onChange={handlePasswordChange} />
        </label>
        <button style={{ backgroundColor: 'white', padding: '10px', borderRadius: '20px', cursor: 'pointer' }} onClick={handleLogin}>Giriş Yap</button>
      </div>
    </div>
  );
};

export default Login;
