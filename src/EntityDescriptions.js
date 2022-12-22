import React from "react";
import BriefDetails from "./BriefDetails";
import addition from "./images/addition.png";
import "./styles.css";

const entityDesc = () => {
  return (
    <div className="entiDesc">
      <span className="entities4">4 Entities</span>
      <span className="add">
        <img src={addition} alt="add" />
      </span>
      <div className="heading">
        <span className="BillingLocation">Billing Location</span>
        <span className="EntityName">Entity Name</span>
        <span className="EntityCode">Entity Code</span>
        <span className="MSLAValid">MSLA Valid through</span>
        <span className="FileSharing">File Sharing</span>
        <BriefDetails />
      </div>
    </div>
  );
};

export default entityDesc;
