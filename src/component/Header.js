import React from "react";

const Header = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: 16,
          marginRight: 4,
          padding: 4,
          fontSize: 14,
          background: "#f1f1f1",
        }}
      >
        Announcement
      </div>
      <div
        style={{
          fontSize: 16,
        }}
      >
        We are happy to announce that we raise $2 Million in Seed Funding
      </div>
    </div>
  );
};

export default Header;
