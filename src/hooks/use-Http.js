import { useCallback, useEffect } from "react";
const useHttp = (requestType, getData) => {
  // let results = [];
  let url = `https://api.themoviedb.org/3${requestType}`;
  // console.log(url);
  const fetchMovieData = useCallback(async () => {
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const data = await response.json();
      // console.log(data.results);
      getData(data.results);
      // data.results.map((item) => results.push(item)); // Đổ dữ liệu vào mảng results để lấy kết quả
      return data.results;
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  useEffect(() => {
    //Sử dụng effect để lấy dữ liệu xuống 1 lần
    fetchMovieData();
  }, [fetchMovieData]);

  return;
};

export default useHttp;
