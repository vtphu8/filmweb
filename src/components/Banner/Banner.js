import React, { useRef, useCallback, useEffect, useState } from "react";
import "./Banner.css";
const Banner = () => {
  let aRandomFilm = useRef({}); // Sử dụng useRef để có thể lấy được dữ liệu ngay ca khi trong hàm useCallback
  const [bannerFilm, setBannerFilm] = useState({});
  const fetchData = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9d7b2325092f152dc0037a909884bcfb&with_network=123`
    )
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data);
        const results = data.results;
        // console.log(results);
        aRandomFilm.current =
          results[Math.floor(Math.random() * results.length - 1)]; // Lấy ngẫu nhiên 1 phim trong danh sách
        // console.log(aRandomFilm);
        setBannerFilm({
          id: aRandomFilm.current.id || `This movie have no Id.`,
          name: aRandomFilm.current.name,
          bannerImg:
            `https://image.tmdb.org/t/p/original` +
            aRandomFilm.current.backdrop_path,
          detail:
            aRandomFilm.current.overview || "This movie have no description.",
        });
        // console.log(bannerFilm);
        // console.log(bannerFilm.bannerImg);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    // sử dụng useEffect để hàm fetchData chỉ chạy 1 lần lúc load trang
    fetchData();
  }, [fetchData]);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('${bannerFilm.bannerImg}')`,
        backgroundSize: `cover`,
        height: "50rem",
      }}
    >
      <div>
        <h1>{bannerFilm.name}</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
          <p>{bannerFilm.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
