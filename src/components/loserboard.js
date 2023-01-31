import Try from "./try";
import fireworks from "../assets/images/fireworks.gif";
import { useState } from "react";
import "../styles.css";
import success from "../assets/images/success.png";
import youdied from "../assets/images/youdied.png";
import winery from "../assets/sound/winsoundy.mp3";

const Loserboard = () => {
  const [show, setShow] = useState(false);
  const [win, setWin] = useState(0);
  const winner = () => {
    setWin(win + 1);
    if (win === 7) setShow(true) && noice();
  };

  const noice = () => {
    new Audio(winery).play();
  };

  return (
    <div>
      <div>
        <>
          <br></br>
          <br></br>
          <br></br>

          <Try setShow={setShow} winner={winner} />
          <Try setShow={setShow} winner={winner} />
          <Try setShow={setShow} winner={winner} />
          <br></br>

          <Try setShow={setShow} winner={winner} />
          <Try setShow={setShow} bomb={true} />
          <Try setShow={setShow} winner={winner} />
          <br></br>

          <Try setShow={setShow} winner={winner} />
          <Try setShow={setShow} winner={winner} />
          <Try setShow={setShow} winner={winner} />
          <br></br>
        </>

        {show &&
          (win === 8 ? (
            <p style={{ backgroundImage: `url(${fireworks})` }}>
              <img src={success} alt=""></img>
              `${noice()}`
            </p>
          ) : (
            <p>
              <img src={youdied} alt=""></img>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Loserboard;
