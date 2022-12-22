import React from "react";
import "./styles.css";
import heading from "./images/Clients.jpg";
import creation from "./images/ghg.png";

const ClientsInfo = () => {
  return (
    <div>
      <div className="clients-heading">
        <span>
          <img className="client" src={heading} alt="client-logo" />
          <img src={creation} alt="creation-time" />
        </span>
      </div>
    </div>
  );
};
export default ClientsInfo;
