import React, { useState } from "react";
import useHttp from "../../hooks/use-Http";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./OriginalList.css";
const OriginalList = () => {
  const [results, setResults] = useState([]);
  const [showDetail, setShowDetail] = useState(false); // Kiểm soát trạng thái ẩn/ hiện khi click vào chi tiết từng phim
  const [movieData, setMovieData] = useState({}); // Kiểm soát thông tin của phim được click vào.
  const getData = (listItem) => {
    setResults(listItem);
  };
  useHttp(`fetchNetflixOriginals`, getData);

  const urlImg = `https://image.tmdb.org/t/p/original`;
  return (
    <div>
      <div className="OriginalList">
        {results.map((item) => (
          <img
            className="imgItem"
            key={item.id}
            src={urlImg + item.poster_path}
            alt={item.name}
            onClick={() => {
              setMovieData({
                // Lưu trữ thông tin của phim
                movieId: item.id,
                movieName: item.name,
                img: item.backdrop_path,
                releaseDate: item.release_date || item.first_air_date,
                vote: item.vote_average,
                details: item.overview || "This movie have no description.",
              });
              setShowDetail(!showDetail);
              // console.log(movieData); // Chỗ này kiểm tra có thông tin
            }}
          ></img>
        ))}
      </div>
      {showDetail && (
        <MovieDetail
          movieId={movieData.movieId}
          movieName={movieData.movieName}
          movieImg={movieData.img}
          releaseDate={movieData.releaseDate}
          vote={movieData.vote}
          details={movieData.details}
        />
      )}
    </div>
  );
};

export default OriginalList;
