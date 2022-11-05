import { memo, useCallback, useEffect, useState } from "react";
import "./MovieDetail.css";
import React from "react";
const MovieDetail = (props) => {
  // console.log("Đây là props", props);
  const movieId = props.movieId;
  const movieImg = `https://image.tmdb.org/t/p/original` + props.movieImg;
  const [videoData, setVideoData] = useState([]);
  const url = `https://api.themoviedb.org/3//movie/${movieId}/videos?api_key=9d7b2325092f152dc0037a909884bcfb`;
  let youtubeVideoLink; // lưu trữ thông tin video trailer nếu lấy được
  const fetchMovieData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      // console.log(data.results);
      // getData(data.results);

      setVideoData(data.results); // Lấy dữ liệu video trả về sau khi fetch
      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  // console.log(videoData);

  if (videoData.length !== 0) {
    videoData.forEach((element) => {
      if (
        element.site === `YouTube` &&
        (element.type === `Trailer` || element.type === `Teaser`) // Kiểm tra để lấy được đúng video trailer hoặc teaser từ youtube
      ) {
        youtubeVideoLink = `https://www.youtube.com/embed/` + element.key;
      }
      return; // Tìm thấy kết quả thì break
    });
  }
  return (
    <div className="movieDetail">
      <div className="detailContent">
        <h2>{props.movieName}</h2>
        <p>Release Date: {props.releaseDate}</p>
        <p>Vote: {props.vote} / 10</p>
        <p>{props.details}</p>
      </div>
      {
        <div className="detailVideo">
          {videoData.length === 0 ? (
            <img
              className="detailImage"
              style={{ maxWidth: "600px" }}
              src={movieImg}
              alt={props.movieName}
            ></img>
          ) : (
            <div>
              <iframe
                title={props.movieName}
                width="100%"
                height="400"
                src={youtubeVideoLink}
              ></iframe>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default memo(MovieDetail);
