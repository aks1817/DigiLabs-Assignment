import React from "react";
import { brands } from "../Constants/constants";

const BrandPartners = () => {
  return (
    <div
      style={{
        marginBlock: 20,
        justifyContent: "space-evenly",
        display: "flex",
        alignItems: "center",
      }}
    >
      {brands.map((item, index) => (
        <img
          key={index}
          src={item.logo}
          style={{ width: "70px", height: "30px" }}
        />
      ))}
    </div>
  );
};

export default BrandPartners;
