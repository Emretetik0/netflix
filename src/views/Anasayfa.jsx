import React from 'react';
import HL from '../components/HL';
import Buton from '../components/Buton';
import üst from "../assets/üst.png";
import Resim from '../components/Resim';
import Footer from "../assets/Footer.png";
import Resimb from '../components/Resimb';
import Resimd from '../components/Resimd';
import Resimc from '../components/Resimc';
import Resime from '../components/Resime';





const Anasayfa = () => {
  return (
    <div className='bg-black overflow-x-hidden'>
      {/* header */}
      <div className='w-full max-w-[1440px] mx-auto flex items-center justify-between h-[82px] px-6'>
        <Buton />
        <ul className='text-white flex pt-4 space-x-6'>
          <li>Ana Sayfa</li>
          <li>Diziler</li>
          <li>Filmler</li>
          <li>Yeni ve Popüler</li>
          <li>Listem</li>
        </ul>
        <HL />
      </div>
      {/* container */}
      <div className=' mx-auto pl-6 pt-4 overflow-x-hidden'>
        <img src={üst} alt="" />
        <div className='mt-[-250px]'><Resim/></div>
        <Resimb/>
        <Resimd/>
        <Resimc/>
        <Resime/>
        
      </div>
      {/* footer */}
      <div>
        <img src={Footer} alt="" className='w-full max-w-[1440px] mx-auto flex items-center justify-between' />
      </div>
    </div>
  );
};

export default Anasayfa;
