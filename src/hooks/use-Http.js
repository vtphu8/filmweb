import { useCallback, useEffect } from "react";
const useHttp = (requestType, getData) => {
  let results = [];
  const API_KEY = `9d7b2325092f152dc0037a909884bcfb`;
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };
  let url = requests.fetchNetflixOriginals;
  if (requestType === `fetchTrending`) {
    url = requests.fetchTrending;
  }
  // console.log(url);
  const fetchMovieData = useCallback(async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3${url}`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data.results);
      getData(data.results);
      // console.log(data.results);
      data.results.map((item) => results.push(item)); // Đổ dữ liệu vào mảng results để lấy kết quả

      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);
  useEffect(() => {
    //Sử dụng effect để lấy dữ liệu xuống 1 lần
    fetchMovieData();
  }, [fetchMovieData]);
  // let i = 1;
  // console.log(++i, results);

  return results;
};

export default useHttp;
