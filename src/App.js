// Styles
import "./App.css";

// Composants
// import Button from "./Button";

// Fonctions
import { useState } from "react";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  return (
    <div>
      <header>
        <i className="fas fa-plane fa-3x"></i>
        <h1>Ready To Go</h1>
      </header>
      <div className="line"></div>
      <div class="buttons">
        <div>
          <div>
            <button
              className={first === false ? "deactivated" : "isactive"}
              onClick={() => {
                if (!first && !second) {
                  setFirst(true);
                  setSecond(true);
                }
              }}
            >
              ON
            </button>
            <button
              className={first === false ? "deactivated" : "isactive"}
              onClick={() => {
                if (!first && !second) {
                  setFirst(true);
                  setSecond(true);
                }
              }}
            >
              ON
            </button>
            <button
              className={first === false ? "deactivated" : "isactive"}
              onClick={() => {
                if (!first && !second) {
                  setFirst(true);
                  setSecond(true);
                }
              }}
            >
              ON
            </button>
          </div>
          <div>
            <button
              className={second === false ? "isactive" : "deactivated"}
              onClick={() => {
                if (first && second) {
                  setFirst(false);
                  setSecond(false);
                }
              }}
            >
              OFF
            </button>
            <button
              className={second === false ? "isactive" : "deactivated"}
              onClick={() => {
                if (first && second) {
                  setFirst(false);
                  setSecond(false);
                }
              }}
            >
              OFF
            </button>
            <button
              className={second === false ? "isactive" : "deactivated"}
              onClick={() => {
                if (first && second) {
                  setFirst(false);
                  setSecond(false);
                }
              }}
            >
              OFF
            </button>
          </div>
        </div>
        {first === false && second === false ? (
          <button className="red">No way !</button>
        ) : (
          <button className="green"> Go !</button>
        )}
      </div>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Réacteur </span>by{" "}
          <span>Claire Hart de Keating</span>
        </p>
      </footer>
    </div>
  );
}

export default App;

// <div>
// <Button
//   val={val}
//   className="on"
//   value="ON"
//   setClassName={setClassName}
// />
// <Button className="on" value="ON" setClassName={setClassName} />
// <Button className="on" value="ON" setClassName={setClassName} />
// </div>
// <div>
// <Button className="off" value="OFF" setClassName={setClassName} />
// <Button className="off" value="OFF" setClassName={setClassName} />
// <Button className="off" value="OFF" setClassName={setClassName} />
// </div>
