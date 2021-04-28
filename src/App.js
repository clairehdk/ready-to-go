// Styles
import "./App.css";

// Composants
import Button from "./Button";

// Fonctions
import { useState } from "react";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <div>
      <header>
        <i className="fas fa-plane fa-3x"></i>
        <h1>Ready To Go</h1>
      </header>
      <div className="line"></div>
      <div>
        <Button
          className={first === false ? "deactivated" : "isactive"}
          first={first}
          setFirst={setFirst}
          value="ON"
        />

        <Button
          className={second === false ? "isactive" : "deactivated"}
          second={second}
          setSecond={setSecond}
          value="OFF"
        />

        <button
          onClick={() => {
            setThird(true);
            console.log("Je viens changer mon troisième state");
          }}
        >
          Second Bouton
        </button>
        <div
          className={
            first === true && second === true && third === true
              ? "green"
              : "red"
          }
        >
          Resultat
        </div>
      </div>
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
