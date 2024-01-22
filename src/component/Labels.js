import React from "react";

const label = [
  {
    name: "2 Million",
    subTitle: "Customers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    name: "1K",
    subTitle: "Downloads",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    name: "$73 Million",
    subTitle: "Transactions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    name: "2.0",
    subTitle: "Latest Version",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];
const Labels = () => {
  return (
    <div
      style={{
        marginBlock: 20,
        justifyContent: "space-evenly",
        display: "flex",
        alignItems: "center",
      }}
    >
      {label.map((item, index) => (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 25,
              marginBlock: 2,
              color: "#512363",
            }}
          >
            {item.name}
          </div>
          <div
            style={{
              fontSize: 12,
              marginBlock: 2,
            }}
          >
            {item.subTitle}
          </div>
          <div
            style={{
              fontSize: 8,
              marginBlock: 2,
              textAlign: "center",
              width: "60%",
            }}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Labels;
