import { useState } from "react";

export default () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    console.log(data.get("first-name"), data.get("last-name"));

    const formJson = Object.fromEntries(data.entries());
    console.log(formJson);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p> value - {inputValue}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="first-name" />
        <input type="text" name="last-name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
