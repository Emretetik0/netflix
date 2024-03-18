import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrowLeft from "../assets/ArrowLeft.png";
const Resime = () => {
  const [data, setData] = useState([]);
  const API_KEY = "adbe332f4022a909e41207bb1732cae8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
        );

        setData(response.data.results.slice(9, 14));
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
<div className="  relative text-white text-7xl py-2  ">
      <div className=" flex flex-col py-2 bg-transparent  gap-4 pl-24 ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Listem
        </p>

      </div>

      <div className=" flex flex-row justify-center items-center pl-20">

      <div className="flex flex-row  gap-4 ">
      {data.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-72 h-40"
                alt={`Movie-${movie.id}`}
              />
            </div>
          ))}


        </div>
      </div>
      <img
            src={ArrowLeft}
            alt=""
            className=" bg-transparent top-28  right-5  absolute h-8 w-8"
          />
           
    </div>
  )
}

export default Resime
