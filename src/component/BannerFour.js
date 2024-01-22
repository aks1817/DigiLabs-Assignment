import React from "react";

const BannerFour = () => {
  return (
    <div
      style={{
        paddingBlock: 40,
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
        Unlock Limitless Possibilities with Our New Card Solutions
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            marginBlockStart: 20,
            padding: 8,
            fontSize: 14,
            borderRadius: 8,
            background: "#512363",
            color: "#fff",
            marginRight: 8,
          }}
        >
          Unlock your Card
        </div>
        <div
          style={{
            marginBlockStart: 20,
            padding: 8,
            fontSize: 14,
            borderRadius: 8,
            background: "#efefef",
          }}
        >
          Customer Support
        </div>
      </div>
    </div>
  );
};

export default BannerFour;
