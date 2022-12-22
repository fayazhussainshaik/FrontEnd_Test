import React from "react";
import viewdownload from "./images/viewdownload.png";
import "./styles.css";
import CorporateData from "./CorporateDate";
import OtherCompanies from "./OtherCompanies";

const Details = () => {
  return (
    <div>
      <div className="DescArea">
        <div className="internalContents">
          <span className="riyadh1">Riyadh, Kingdom of Saudi Arabia</span>
          <span className="riyadh2">Lucas Films Private Limited</span>
          <span className="riyadh3">LUCF01</span>
          <span className="riyadh4">3 June 2022 - 5 June 2030</span>
          <span className="riyadh5">External</span>
        </div>
        <div className="AdressLocation">
          <div className="postaladdress">
            <span className="address">Address</span>
            <br />
            <span className="address1">Line 1</span>
            <br />
            <span className="address1">Line 2</span>
            <br />
            <span className="address1">City, Country</span>
            <br />
            <span className="address1">ZIP Code</span>
            <div className="ChargeCodePoNo">
              <span className="Ccode">Charge Code / PO Number</span>
              <br />
              <span className="required">Required</span>
            </div>
            <div className="MSLA">
              <span className="lucasfilm">MSLA</span>
              <br />
              <span className="lucasfilm1">
                20200916 EZ LucasFilms MOU_signed by George.pdf
              </span>
              <span className="view">
                <img src={viewdownload} alt="viewDownload" />
              </span>
            </div>
          </div>
          <div className="CompVal">
            <div className="CompanyRegistrationName">
              <span className="comreg">Company Registration Name</span>
              <br />
              <span className="comreg1">UICE87F2T749WEY</span>
            </div>
            <br />
            <div className="CompanyRegistrationValidity">
              <span className="comreg">Company Registration Validity</span>
              <br />
              <span className="comreg1">5 June 2025</span>
            </div>
            <div className="DurationOfStorage">
              <span className="comreg">Duration Of File Storage</span>
              <br />
              <span className="comreg1">90 Days</span>
            </div>
          </div>
          <div className="TaxRegistrationNoTRN">
            <div className="TaxRegistrationNo">
              <span className="comreg">TAX Registration No</span>
              <br />
              <span className="comreg1">AHR37T983Q7TRG8FG</span>
            </div>
            <div className="trnvalidity">
              <span className="comreg">TRN Validity</span>
              <br />
              <span className="comreg1">5 June 2025</span>
            </div>
            <div className="currency">
              <span className="comreg">Currency</span>
              <br />
              <span className="comreg1">US Dollar ($)</span>
            </div>
            <div className="VatWht">
              <span className="comreg">VAT + WHT</span>
              <br />
              <span className="comreg1">5% + 5%</span>
            </div>
          </div>
        </div>
        <div className="Corporateprice">
          <span classname="corporate">Corporate Price As MSLA</span>
          <div className="servicesUnits">
            <span className="service1">Service</span>
            <span className="service2">Units</span>
            <span className="service3">List Price</span>
            <span className="service3">Offered Price</span>
            <span className="service3">Discount</span>
            <CorporateData />
          </div>
        </div>
      </div>
      <OtherCompanies />
    </div>
  );
};

export default Details;
