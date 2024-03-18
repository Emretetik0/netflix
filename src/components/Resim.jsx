import React, { useEffect, useState } from "react";
import ArrowLeft from "../assets/ArrowLeft.png";
import axios from "axios";

const Resim = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const API_KEY = "adbe332f4022a909e41207bb1732cae8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
        );
        const response2 = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2&api_key=${API_KEY}`
        );
        const response3 = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=3&api_key=${API_KEY}`
        );

        setData(response1.data.results.slice(1, 6));
        setData1(response2.data.results.slice(8, 13));
        setData2(response3.data.results.slice(15, 22));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleArrowLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className=" top-52 right-80  text-white text-7xl py-2 pl-24">
      <div className=" flex flex-col py-4 bg-transparent  gap-4  ">
      <div className=" flex flex-col py-4 bg-transparent  gap-4  ">
        <p className=" pl-6  bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Netflix'te Popüler
        </p>
        <div className="relative bg-transparent">
          <div className=" pl-6  flex flex-row h-40 gap-3  bg-transparent overflow-x-hidden">
          {data.map((movie,index) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-72 h-40 "
                />
              </div>
            ))}
          </div>
          <img
            src={ArrowLeft}
            alt=""
            className=" bg-transparent right-12 top-14 absolute h-8 w-8 fill-white"
            onClick={handleArrowLeftClick}
          />
        </div>
      </div>
        <p className="pl-6  bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Kemal, İzlemeye Devam Et
        </p>
        <div className="relative bg-transparent">
          <div className=" pl-6  flex flex-row h-40 gap-3  bg-transparent overflow-x-hidden">
          {data1.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-72 h-40 "
                />
              </div>
            ))}
          </div>
          <img
            src={ArrowLeft}
            onClick={handleArrowLeftClick}
            alt=""
            className=" bg-transparent right-12 top-14 absolute h-8 w-8 fill-white"
          />
        </div>
      </div>

      <div className=" flex flex-col py-4 bg-transparent  gap-4 ">
        <p className="pl-6  bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Gündemdekiler
        </p>
        <div className="relative bg-transparent">
          <div className=" pl-6 flex flex-row h-40 gap-3  bg-transparent overflow-x-hidden">
          {data2.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-72 h-40 "
                />
              </div>
            ))}
          </div>
          <img
            src={ArrowLeft}
            onClick={handleArrowLeftClick}
            alt=""
            className=" bg-transparent right-12 top-14 absolute h-8 w-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Resim