import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchComponent/SearchForm/SearchForm";
import ResultList from "../../components/SearchComponent/ResultList/ResultList";
import "./Search.css";
const Search = () => {
  const [inputData, setInputData] = useState();
  function getInputData(data) {
    //Hàm callback để lấy dữ liệu từ component con lên
    // console.log("data from SearchForm:", data);
    setInputData(data); // đổ dữ liệu vào inputData
  }
  console.log(inputData);
  return (
    <div className="app">
      <NavBar></NavBar>
      <SearchForm getInputData={getInputData}></SearchForm>
      <ResultList
        input={inputData === !inputData ? "" : inputData}
      ></ResultList>
    </div>
  );
};

export default Search;
