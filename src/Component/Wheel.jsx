import "./wheel.css";

import { SubWheel } from "./SubWheel";
import { useEffect } from "react";
import { useState } from "react";

export const Wheel = () => {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner) => {
    console.log(winner);
  };
  const [winner, setWinner] = useState(null);
  const [color, setColor] = useState("white");
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const HandleClick = () => {
    if (text.includes(",")) {
      const temp = text.split(",");
      setData((prev) => [prev, ...temp]);
      return;
    }
    setData([...data, text]);
    setText("");
  };

  return (
    <div className="wheel-container">
      <div
        style={{
          width: "30%",
          height: "50%",
          marginRight: "10px",
          backgroundColor: "#F6F7FA",
          borderRadius: "20px",
          overflow: "auto",
        }}
      >
        <div style={{ width: "95%", margin: "auto" }}>
          <div
            style={{
              backgroundColor: color,
              height: "50px",
              borderRadius: "20px",
              marginTop: "5px",
            }}
          >
            {winner ? "Press Play button" : winner}
          </div>
          <div style={{ display: "flex", placeItems: "center" }}>
            <h3 style={{ marginRight: "5px" }}>Entries</h3>
            <p>{data.length}</p>
          </div>
          <div style={{ display: "flex", placeItems: "center" }}>
            <input
              type="text"
              name=""
              id=""
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={HandleClick}>Add</button>
          </div>
          <div style={{ height: "100%", overflow: "auto" }}>
            {data.length > 0 && data.map((elem, i) => <p key={i}>{elem}</p>)}
          </div>
        </div>
      </div>
      <div style={{ width: "70%", height: "100%" }}>
        <SubWheel
          data={[...data]}
          onFinished={onFinished}
          segColors={segColors}
        />
      </div>
    </div>
  );
};
