import React from 'react';
import { useNavigate } from 'react-router-dom';
import dört from '../assets/dört.png';


const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Anasayfa');
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={dört} alt=""className='' />
    </button>
  );
};

export default Button;
