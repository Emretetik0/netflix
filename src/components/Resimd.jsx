import React from 'react'
import RankCard from "../assets/RankCard.png";
import RankCard1 from "../assets/RankCard1.png";
import RankCard2 from "../assets/RankCard2.png";
import RankCard3 from "../assets/RankCard3.png";
import RankCard4 from "../assets/RankCard4.png";
import ArrowLeft from "../assets/ArrowLeft.png";
const Resimd = () => {
  return (
    <div className="  text-white text-7xl py-2 pl-9">
    <div className=" flex flex-col py-2 bg-transparent  gap-4  ">
      <p className=" pl-6 bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
        Kemal, İzlemeye Devam Et
      </p>
      <div className=" pl-7  flex flex-row gap-1 overflow-x-hidden ">
          <img src={RankCard} alt="" className="" />
          <img src={RankCard1} alt="" className=""  />
          <img src={RankCard2} alt="" className=""  />
          <img src={RankCard3} alt="" className=""  />
          <img src={RankCard4} alt="" className=""  />
{/* 
          {data.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-[285px] h-[570px] " 
              />
            </div>
          ))} */}

      </div>
      <img
          src={ArrowLeft}
          alt=""
          className=" bg-black pr-12 top-[110rem] absolute h-8 w-8"
        />
    </div>
  </div>
  )
}

export default Resimd
