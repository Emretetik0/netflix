import React from 'react'
import Noi from "../assets/Noi.png";
import MovieVerticalCard from "../assets/MovieVerticalCard.png";
import MovieVerticalCard1 from "../assets/MovieVerticalCard1.png";
import MovieVerticalCard2 from "../assets/MovieVerticalCard2.png";
import MovieVerticalCard3 from "../assets/MovieVerticalCard3.png";
import MovieVerticalCard4 from "../assets/MovieVerticalCard4.png";



const Büyük = () => {
  return (
    <div className='w-auto  flex items-center space-x-2 overflow-x-hidden'>
      <img src={MovieVerticalCard} alt="" />
      <img src={MovieVerticalCard1} alt="" />
      <img src={MovieVerticalCard2} alt="" />
      <img src={MovieVerticalCard3} alt="" />
      <img src={MovieVerticalCard4} alt="" />


    </div>
  )
}

export default Büyük
