import React from "react";
import mobile from "../assets/mobile.png";
import spending from "../assets/spending.png";

const BannerTwo = () => {
  return (
    <div
      style={{
        paddingBlockStart: 40,
        justifyContent: "space-evenly",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "#f3eff6",
          marginRight: 8,
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={mobile} width={350} height={400} />
      </div>

      <div
        style={{
          backgroundColor: "#f3eff6",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={spending}
          width={400}
          height={300}
          style={{ border: "1px solid #512363", borderRadius: 8 }}
        />
      </div>
    </div>
  );
};

export default BannerTwo;
