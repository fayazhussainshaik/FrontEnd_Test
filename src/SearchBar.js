import React from "react";
import searcbar from "./images/searchbar.png";
import scrolldown from "./images/scrolldown.png";
import "./styles.css";

const search = () => {
  return (
    <div>
      <div className="Search">
        <img src={searcbar} alt="searchbar" />
        <div className="scroll">
          <img src={scrolldown} alt="scrollmenu" />
        </div>
      </div>
    </div>
  );
};

export default search;
