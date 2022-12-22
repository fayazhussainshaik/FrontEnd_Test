import React from "react";
import companyinfologo from "./images/companyinfologo.png";
import "./styles.css";

const companyinfo = () => {
  return (
    <div className="companyinfos">
      <div className="infos">
        <img src={companyinfologo} alt="pdflogo" />
        <div className="infoname">
          <b>Lucas Films Private Limited</b>
        </div>
        <button>Edit</button>
      </div>
      <div className="logcode">
        <div className="cmpcode">
          <span>Company Code</span>
          <br />
          <span>
            <b>LUCF</b>
          </span>
        </div>
        <div className="cmpcode">
          <span>Company Logo</span>
          <br />
          <span>
            <b>Unavailable</b>
          </span>
        </div>
      </div>
      <div className="domain">
        <span>Domains</span>
        <br />
        <span>@lucasfilms.com</span>
        <br />
        <span>@lucasstarwars.com</span>
        <br />
        <span>@starwars.com</span>
        <br />
        <span style={{ textDecoration: "underline" }}>+5 Others</span>
      </div>
    </div>
  );
};
export default companyinfo;
