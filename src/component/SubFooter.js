import React from "react";

const SubFooter = () => {
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
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Mode UI
      </div>

      <div
        style={{
          paddingBlockStart: 20,
          fontSize: 14,
          width: "50%",
          textAlign: "center",
        }}
      >
        Mde UI is a comprehensive design system that empowers designer and
        developers to create cohesive and visually stunning user interface
        across various platforms and devices.
      </div>
    </div>
  );
};

export default SubFooter;
