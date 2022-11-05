import React, { useCallback, useEffect, useState } from "react";
import MovieDetail from "../../MovieDetail/MovieDetail";
import "./ResultList.css";
const ResultList = (props) => {
  // console.log(props.input);
  const imgPath = `https://image.tmdb.org/t/p/original`; // url để gắn với imgUrl
  const input = props.input || "";
  const url =
    `https://api.themoviedb.org/3/search/movie?api_key=9d7b2325092f152dc0037a909884bcfb&language=en-US&page=1&query=` +
    input;
  const [searchResult, setSearchResult] = useState([]); // kiểm soát kết quả trả về của tìm kiếm

  const [showDetail, setShowDetail] = useState(false); // Kiểm soát trạng thái ẩn/ hiện khi click vào chi tiết từng phim
  const [movieData, setMovieData] = useState({}); // Kiểm soát thông tin của phim được click vào.
  const [onShowMovieId, setOnShowMovieId] = useState(0); // Lấy id của phim cũ, để so sánh khi click vào 1 bộ phim khác

  const fetchData = useCallback(async () => {
    if (input) {
      //Nếu lấy được dữ liệu thì mới fetchData
      const reponse = await fetch(url);
      const data = await reponse.json();
      // console.log("dữ liệu tìm kiếm:", data.results);
      setSearchResult(data.results);
    }
  }, [input, url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="searchResult">
      <h3>Search Result</h3>

      <div className="resultList">
        {searchResult.length > 0 ? ( // kiểm tra nếu có kết quả tìm kiếm thì mới render poster, nếu ko có kết quả thì in ra ko có kết quả
          searchResult.map(
            (item) =>
              item.poster_path && ( // Nếu có link ảnh thì mới hiển thị
                <img
                  className="imgItem"
                  key={item.title + item.id}
                  src={imgPath + item.poster_path}
                  alt={item.title}
                  onClick={() => {
                    setMovieData({
                      // Lưu trữ thông tin của phim
                      movieId: item.id,
                      movieName: item.title,
                      img: item.backdrop_path,
                      releaseDate: item.release_date || item.first_air_date,
                      vote: item.vote_average,
                      details:
                        item.overview || "This movie have no description.",
                    });
                    setShowDetail(!showDetail);

                    if (onShowMovieId === item.id) {
                      setShowDetail(!showDetail); // chuyển trạng thái đóng/mở chi tiết phim nếu click vào phim cũ
                    } else {
                      setShowDetail(true);
                    }
                    setOnShowMovieId(item.id); // Lưu lại thông tin id phim hiện tại để khi click vào phim mới đem ra so sánh, nếu id phim mới khác phim cũ thì hiển thị thông tin phim mới, nếu giống id cũ thì đóng thẻ MovieDetail
                  }}
                ></img>
              )
          )
        ) : (
          <div>No Result</div>
        )}
      </div>
      {(!input || input.trim() === "") && (
        //Kiểm tra input của người dùng có hợp lệ hay ko?
        <p style={{ color: `red` }}>Please insert your keyword</p>
      )}
      {showDetail && ( // Hiển thị thông tin phim khi trang thái này thay đổi
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

export default ResultList;
