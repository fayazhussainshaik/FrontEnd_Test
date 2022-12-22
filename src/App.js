import React from "react";
import ClientsInfo from "./clients";
import SearchBar from "./SearchBar";
import CompanyArea from "./CompanyArea";
import ProfileSection from "./ProfileSection";
import CompanyInfo from "./CompanyInfo";
import Entities from "./Entities";
import EntityDescriptions from "./EntityDescriptions";
import logo from "./images/logo.png";
import "./styles.css";

const MainPage = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="companylogo">
          <img src={logo} alt="company-logo" />
        </div>
        <div className="left-colors"></div>
        <div className="left-colors"></div>
        <div className="left-colors"></div>
      </div>
      <div className="middle">
        <ClientsInfo />
        <SearchBar />
        <CompanyArea />
      </div>
      <div className="right">
        <ProfileSection />
        <CompanyInfo />
        <Entities />
        <EntityDescriptions />
      </div>
    </div>
  );
};

export default MainPage;
