import React, { useState } from "react";
import "./TrendingList.css";
import useHttp from "../../hooks/use-Http";

const TrendingList = () => {
  const [results, setResults] = useState([]);
  const getData = (listItem) => {
    setResults(listItem);
  };
  useHttp(`fetchTrending`, getData);

  const urlImg = `https://image.tmdb.org/t/p/original`;
  //   console.log(`Đây là data`, results);
  //   console.log(results.length);
  return (
    <div className="trendingList">
      <h2>Xu hướng</h2>
      <div className="filmList">
        {results.map((item) => (
          <img
            className="imgItem"
            key={item.id}
            src={urlImg + item.backdrop_path}
            alt={item.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default TrendingList;
