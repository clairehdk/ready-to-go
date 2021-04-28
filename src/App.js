// Styles
import "./App.css";

// Composants
import Button from "./Button";

// Fonctions
import { useState } from "react";

function App() {
  const [className, setClassName] = useState("");

  return (
    <div>
      <header>
        <i className="fas fa-plane fa-3x"></i>
        <h1>Ready To Go</h1>
      </header>
      <div className="line"></div>
      <div className="buttons">
        <div className="button_on">
          <Button
            className={className}
            value="ON"
            setClassName={setClassName}
          />
          <Button
            className={className}
            value="ON"
            setClassName={setClassName}
          />
          <Button
            className={className}
            value="ON"
            setClassName={setClassName}
          />
        </div>
        <div className="button_off">
          <Button
            className={className}
            value="OFF"
            setClassName={setClassName}
          />
          <Button
            className={className}
            value="OFF"
            setClassName={setClassName}
          />
          <Button
            className={className}
            value="OFF"
            setClassName={setClassName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
