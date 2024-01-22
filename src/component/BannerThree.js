import React from "react";

const BannerThree = () => {
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
          paddingBlockStart: 20,
          fontSize: 30,
          width: "50%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Wise
      </div>

      <div
        style={{
          paddingBlockStart: 20,
          fontSize: 14,
          width: "50%",
          textAlign: "center",
        }}
      >
        I had the pleasure of experiencing the next generation of card solutions
        with this incredible product. It's refreshing to see suh innovation in
        the financial industry.
      </div>

      <div
        style={{
          marginBlockStart: 20,
          padding: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          style={{ width: 50, height: 50, borderRadius: 25, marginBottom: 8 }}
        />
        <div style={{ fontSize: 12, fontWeight: "bold" }}>Nick Babich</div>
        <div style={{ fontSize: 10 }}>Lead Designer</div>
        <div style={{ fontSize: 8 }}>⭐⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default BannerThree;
