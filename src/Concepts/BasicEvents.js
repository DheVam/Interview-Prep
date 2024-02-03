import React from "react";

const BasicEvents = () => {
  const handleButtonClick = (param) => {
    window.alert("Button Clicked with parameter:" + param);
    console.log("Button param:", param);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("Hello")}>Click Me</button>
    </div>
  );
};

export default BasicEvents;

export const EventDelegation = () => {
  const handleClick = (e) => {
    window.alert("Clicked Item is: " + e.target.textContent);
  };
  return (
    <div>
      <ul onClick={(e) => handleClick(e)} style={{ width: 50 }}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};
