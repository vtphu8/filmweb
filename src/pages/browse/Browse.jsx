import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import OriginalList from "../../components/ListFilm/OriginalList";
import TrendingList from "../../components/ListFilm/TrendingList";
import "./Browse.css";

function Browse() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="content">
        <OriginalList></OriginalList>
        <TrendingList></TrendingList>
      </div>

      {/* <div style={{ height: "2000px" }}></div> */}
    </div>
  );
}

export default Browse;
