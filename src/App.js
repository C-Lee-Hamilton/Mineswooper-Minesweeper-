import "./styles.css";
import video2 from "./assets/video/video2.mp4";
import Buttons from "./components/buttons";
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <div className="video1">
        <video src={video2} autoPlay loop muted />
        <div className="content">
          <Header />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
