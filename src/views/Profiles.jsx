import React from 'react';
import Netflix from '../assets/Netflix.png';
import üç from '../assets/üç.png';
import beş from '../assets/beş.png';
import yönet from '../assets/yönet.png';
import Button from '../components/Button';
import iki from '../assets/iki.png';
import bir from '../assets/bir.png';


const Profiles = () => {
  return (
    <div className='w-screen h-screen bg-black  flex flex-col items-center justify-center '>
      <div className='w-screen h-20 bg-black fixed top-0 py-7 px-16'>
        <img src={Netflix} alt="Netflix" />
      </div>
      <div id='orta' className='w-3/4 h-2/5 flex flex-col items-center justify-center'>
        <h1 className='text-white text-5xl py-10'>Kim İzliyor?</h1>
        <div className="flex mt-4">
          <button className="mx-4">
            <Button/>
          </button>
          <button className="mx-4">
          <img src={iki} alt="emre" />
          </button>
          <button className="mx-4">
            <img src={üç} alt="emre" />
          </button>
          <button className="mx-4">
            <img src={bir} alt="çocuk" />
          </button>
          <button className="mx-4">
            <img src={beş} alt="profil ekle" />
          </button>
        </div>
      </div>
      <div className=" py-24">
      <button>
        <img src={yönet} alt="" />
      </button>

      </div>
    </div>
  );
};

export default Profiles;
