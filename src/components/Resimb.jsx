import React, { useEffect, useState } from "react";
import axios from "axios";

const Resimb = () => {
  const [data, setData] = useState([]);
  const API_KEY = "adbe332f4022a909e41207bb1732cae8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
        );

        setData(response.data.results.slice(0, 5));
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="right-80 text-white text-7xl py-2 pl-24">
      <div className="flex flex-col py-2 bg-transparent gap-4">
        <p className="pl-6 bg-transparent text-2xl font-bold text-[#E5E5E5]">
          Netflix Orijinal İçerikler
        </p>
        <div className="pl-7 h-[550px] flex flex-row gap-1 overflow-x-hidden">
          {data.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-[285px] h-[550px]"
                alt={`Movie-${movie.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resimb;
