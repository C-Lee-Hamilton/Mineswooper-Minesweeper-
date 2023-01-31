import { useState } from "react";
import "../styles.css";
import trytry from "../assets/images/trytry.jpg";
import losery from "../assets/sound/loserr.mp3";

const Try = (props) => {
  const { setShow, bomb, winner } = props;
  const [btnColor, setBtnColor] = useState("blue");

  const noise = () => {
    new Audio(losery).play();
  };

  const loserColorer = () => {
    setShow(true);
    noise();
    btnColor === "blue" ? setBtnColor("red") : setBtnColor("red");
  };

  const colorer = () => {
    setBtnColor("yellow");
    winner();
  };

  return (
    <button
      className="mutton"
      onClick={bomb ? loserColorer : colorer}
      style={{ backgroundColor: btnColor, color: btnColor }}
    >
      <img className="trytry" src={trytry} alt=""></img>
    </button>
  );
};

Try.defaultProps = {
  bomb: false
};

export default Try;
