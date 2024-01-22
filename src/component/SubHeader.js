import React from "react";

const options = [
  "Card access",
  "Banking",
  "Processing",
  "About",
  "Carrier",
  "Contact",
];
const SubHeader = () => {
  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        paddingTop: 8,
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Mode
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {options.map((item, index) => (
          <div key={index} style={{ marginInline: 8 }}>
            {item}
          </div>
        ))}
      </div>
      <div
        style={{
          padding: 8,
          fontSize: 14,
          borderRadius: 8,
          background: "#f1f1f1",
        }}
      >
        Login
      </div>
    </div>
  );
};

export default SubHeader;
