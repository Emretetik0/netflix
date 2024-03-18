// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profiles from './views/Profiles';
import Login from './views/Login';
import Anasayfa from './views/Anasayfa';
// import 'antd/dist/antd.css';
import { useSelector,useDispatch } from 'react-redux';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/Anasayfa" element={<Anasayfa />} />

      </Routes>
    </Router>
  );
};

export default App;
