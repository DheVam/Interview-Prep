import React, { useRef, useState } from "react";

export const ReactForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitted Value is:", value);
  };
  return (
    <form onSubmit={submitForm}>
      <label>Controlled Form:</label>

      <input placeholder="Enter your name " onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export const UncontrolledForm = () => {
  const inputRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      "Submitted value from uncontrolled form: ",
      inputRef.current.value
    );
  };
  return (
    <form onSubmit={submitForm}>
      <label>Uncontrolled Form:</label>
      <input placeholder="enter you password" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
