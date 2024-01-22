import React from "react";
import { brands } from "../Constants/constants";

const features = [
  {
    name: "Globally Accepted",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    img: "https://i.pinimg.com/originals/4b/3e/4a/4b3e4ae1495d5132a32029db530f9a99.jpg",
  },
  {
    name: "Biometric Integrated",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    img: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-key-icon-png-image_515925.jpg",
  },
  {
    name: "Fully Secured",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    img: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-lock-icon-png-image_318067.jpg",
  },
];
const Features = () => {
  return (
    <div
      style={{
        marginBlock: 20,
        justifyContent: "space-evenly",
        display: "flex",
        alignItems: "center",
      }}
    >
      {features.map((item, index) => (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            key={index}
            src={item.img}
            style={{
              width: "40px",
              height: "30px",
              backgroundColor: "#f3eff6",
            }}
          />
          <div style={{ fontSize: 14, fontWeight: "bold", marginBlock: 10 }}>
            {item.name}
          </div>
          <div
            style={{
              fontSize: 8,
              fontWeight: "bold",
              width: "50%",
              textAlign: "center",
            }}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
