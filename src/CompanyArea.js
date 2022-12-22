import React from "react";
import "./styles.css";

const CompanyArea = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <>
      <div className="companyarea">
        {arr.map((item, id) => {
          return (
            <div className="companydata" key={item}>
              <div className="company">
                <span className="companyname">Company Name</span>
                <span className="code">CODE</span>
              </div>
              <div className="companyEntities">
                <span className="entities">8 Entities</span>
                <span>64 Users</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CompanyArea;
