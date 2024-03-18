import React from 'react';
import üst from '../assets/üst.png';
import Buton from '../components/Buton';
import Footer from '../assets/Footer.png';
import Mi from '../assets/Mi.png';
import HeaderRight from "../assets/HeaderRight.png";
import Resim from '../components/Resim';
import Resimb from '../components/Resimb';
import Resimc from '../components/Resimc';
import Resimd from '../components/Resimd';

import Resime from '../components/Resime';




const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black min-h-screen'>
    {/* header */}
    <div className='bg-transparent w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center pl-14'>
        <div className='pt-8 pb-4'>
          <Buton />
        </div>
        <div className='flex items-center pt-4'>
          <img src={Mi} alt="" className='w-8 h-8 sm:w-auto sm:h-auto' />
          <img src={HeaderRight} alt="" className='mx-4 sm:mx-8 overflow-x-hidden' />
        </div>
      </div>
      {/* container */}
      <div className='bg-slate-800'>
        <img src={üst} alt="" />
        <Resim/>
        <Resimb/>
       <Resimd/>
        <Resimc/>
        <Resime/>
      </div>
      {/* footer */}
      <div>
        <img src={Footer} alt="" />
      </div>
    </div>
  );
}

export default Homepage;
