import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/ListFilm/MovieList";
import "./Browse.css";

function Browse() {
  const API_KEY = `9d7b2325092f152dc0037a909884bcfb`;
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };
  // console.log(`đây là request type:`, requests.fetchTopRated);
  return (
    <div className="app">
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="content">
        <MovieList
          ListType={requests.fetchNetflixOriginals}
          ListName="Original"
        ></MovieList>
        <MovieList
          ListType={requests.fetchTrending}
          ListName="Xu hướng"
        ></MovieList>
        <MovieList
          ListType={requests.fetchTopRated}
          ListName="Xếp hạng cao"
        ></MovieList>
        <MovieList
          ListType={requests.fetchActionMovies}
          ListName="Phim hành động"
        ></MovieList>
        <MovieList
          ListType={requests.fetchComedyMovies}
          ListName="Phim hài"
        ></MovieList>
        <MovieList
          ListType={requests.fetchHorrorMovies}
          ListName="Phim kinh dị"
        ></MovieList>
        <MovieList
          ListType={requests.fetchRomanceMovies}
          ListName="Phim lãng mạn"
        ></MovieList>
        <MovieList
          ListType={requests.fetchDocumentaries}
          ListName="Phim tài liệu"
        ></MovieList>
      </div>
    </div>
  );
}

export default Browse;
