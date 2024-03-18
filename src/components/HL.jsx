import React from 'react'
import vec from "../assets/vec.png";
import Vector from "../assets/Vector.png";
import Fill from "../assets/Fill.png";
import DownArrow from "../assets/DownArrow.png";
import ProfileIMG from "../assets/ProfileIMG.png";

// hedar right Comp.

const HL = () => {
  return (
    <div className='overflow-x-hidden flex items-center pr-8 pt-4 space-x-6'>
    <img src={vec} alt="" /> 
    <h1 className='text-white'>Kemal</h1>
    <img src={Vector} alt="" />
    <img src={Fill} alt="" /> 
    <img src={DownArrow} alt="" /> 
    <img src={ProfileIMG} alt="" />

    </div>
     )
}

export default HL
