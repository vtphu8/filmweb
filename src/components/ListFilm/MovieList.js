import React, { useState } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import useHttp from "../../hooks/use-Http";

import "./MovieList.css";
const MovieList = (props) => {
  const [results, setResults] = useState([]);
  const [showDetail, setShowDetail] = useState(false); // Kiểm soát trạng thái ẩn/ hiện khi click vào chi tiết từng phim
  const [movieData, setMovieData] = useState({}); // Kiểm soát thông tin của phim được click vào.
  const [onShowMovieId, setOnShowMovieId] = useState(0); // Lấy id của phim cũ, để so sánh khi click vào 1 bộ phim khác
  const getData = (listItem) => {
    setResults(listItem);
  };
  useHttp(props.ListType, getData);

  const urlImg = `https://image.tmdb.org/t/p/original`;
  return (
    <div>
      <div className="MovieSection">
        {props.ListName !== `Original` ? <h2>{props.ListName}</h2> : <></>}
        <div className="MovieList">
          {results.map((item) => (
            <img
              className="imgItem"
              key={item.id}
              src={
                props.ListName !== `Original` // Kiểm tra nếu khác Original list thì hiển thị hình ảnh backdrop, ngược lại thì hiển thị poster
                  ? urlImg + (item.backdrop_path || item.poster_path)
                  : urlImg + item.poster_path
              }
              alt={item.name}
              onClick={() => {
                // console.log(`đây là thông tin phim được click:`, item);
                setMovieData({
                  // Lưu trữ thông tin của phim
                  movieId: item.id,
                  movieName: item.title || item.name,
                  img: item.backdrop_path || item.poster_path,
                  releaseDate: item.release_date || item.first_air_date,
                  vote: item.vote_average,
                  details: item.overview || "This movie have no description.",
                });
                // console.log("đây là tên phim: ", movieData);
                if (onShowMovieId === item.id) {
                  setShowDetail(!showDetail); // chuyển trạng thái đóng/mở chi tiết phim nếu click vào phim cũ
                } else {
                  setShowDetail(true);
                }
                setOnShowMovieId(item.id);

                // console.log(movieData); // Chỗ này kiểm tra có thông tin
              }}
            ></img>
          ))}
        </div>
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

export default MovieList;
