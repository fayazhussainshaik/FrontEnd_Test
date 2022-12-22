import React from "react";
import "./styles.css";

const Data = () => {
  const arr = [1, 2, 3];
  return (
    <>
      {arr.map((item, id) => {
        return (
          <div className="datainformation" key={item}>
            <span className="dtainfo">
              Arabic Language Translation : EZ Assured
            </span>
            <span className="dtainfo1">Words</span>
            <span className="dtainfo2">0.1 AED</span>
            <span className="dtainfo3">0.09 AED</span>
            <span className="dtainfo4">10% ( 19% )</span>
          </div>
        );
      })}
    </>
  );
};
export default Data;
