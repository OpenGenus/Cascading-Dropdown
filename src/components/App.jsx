import React, { useState } from "react";
import colorPalette from "../colorPalette";

export default function App() {
  // const [selColor, setColor] = useState("");
  const [selShade, setShade] = useState([]);
  const blueStyle = {
    backgroundImage: "linear-gradient(to right, slateblue, lightblue)",
  };
  const [bg, setBG] = useState(blueStyle);
  const greenStyle = {
    backgroundImage: "linear-gradient(to right, #8FBC8B, #00693E)",
  };
  const redStyle = {
    backgroundImage: "linear-gradient(to right, #F08080, #9e1b32)",
  };

  function check(event) {
    // setColor(event.target.value);
    let bgColor = event.target.value.toLowerCase();
    var shadey = colorPalette.find((obj) => obj.name === event.target.value);
    var shadeList = shadey.shades;
    shadey ? setShade(shadeList) : [];
    if (bgColor == "green") {
      setBG(greenStyle);
    } else if (bgColor == "red") {
      setBG(redStyle);
    } else {
      setBG(blueStyle);
    }
    console.log(selShade);
  }
  return (
    <div className="form" style={bg}>
      <label htmlFor="colors">Choose a color:</label>
      <select name="colors" id="colors" onChange={check}>
        {colorPalette.map((color) => (
          <option key={color.id} value={color.name}>
            {color.name}
          </option>
        ))}
      </select>
      <label htmlFor="shades">Choose a shade:</label>
      <select name="shades" id="shades">
        {selShade != [] &&
          selShade.map((shade) => (
            <option key={selShade.findIndex((sh) => sh == shade)} value={shade}>
              {shade}
            </option>
          ))}
      </select>
    </div>
  );
}