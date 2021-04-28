import React from "react";

const Button = ({ value, className, setClassName }) => {
  return (
    <>
      <button
        onClick={() => {
          if (value === "ON") {
            setClassName(className === "off");
          } else if (value === "OFF") {
            setClassName(className === "on");
          }
        }}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
