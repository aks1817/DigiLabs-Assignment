import React from "react";

const SubBanner = () => {
  return (
    <div
      style={{
        paddingBlockStart: 100,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          paddingBlockStart: 20,
          fontSize: 30,
          width: "50%",
          textAlign: "center",
        }}
      >
        Elevating Card Programs with Cutting-Edge Technology
      </div>

      <div
        style={{
          paddingBlockStart: 20,
          fontSize: 14,
          width: "50%",
          textAlign: "center",
        }}
      >
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua
      </div>

      <div
        style={{
          fontSize: 14,
          color: "#512363",
          marginTop: 10,
        }}
      >
        Compare all Pro features
      </div>
    </div>
  );
};

export default SubBanner;
