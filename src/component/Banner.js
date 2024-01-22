import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        paddingBlockStart: 40,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 14,
          color: "#512363",
        }}
      >
        Seamless experience
      </div>
      <div
        style={{
          paddingBlockStart: 20,
          fontSize: 40,
          width: "50%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Unleashing the Next Generation of Card Solutions
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
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </div>

      <div
        style={{
          marginBlockStart: 20,
          padding: 8,
          fontSize: 14,
          borderRadius: 8,
          background: "#512363",
          color: "#fff",
        }}
      >
        Unlock your Card
      </div>

      <div
        style={{
          marginBlockStart: 10,
          fontSize: 10,
        }}
      >
        *No credit required
      </div>
    </div>
  );
};

export default Banner;
