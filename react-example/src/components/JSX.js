const JSX = () => {
  const name = "Mayur Punjabi";

  const person = { name: "other person" };

  const handleClick = () => alert("hello");
  return (
    <>
      <p style={{ color: "red", maxHeight: "1rem" }}>Hello {name}</p>
      <p>Hello {person.name}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default JSX;
