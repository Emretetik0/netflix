import React from 'react';
import { useNavigate } from 'react-router-dom';
import Netflix from "../assets/Netflix.png";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Assuming '/profiles' is the path to the Profiles view
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={Netflix} alt="" className='pl-8 pt-4 ' />
      </button>
    </div>
  );
}

export default Button;
