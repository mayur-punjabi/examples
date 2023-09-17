import { useEffect, useState } from "react";

const UseEffect = ({ counter }) => {
  useEffect(() => {
    console.log("component mounted");

    return () => console.log("component unmounted");
  }, []);

  useEffect(() => {
    console.log("component updated");
  });

  return <p>counter {counter}</p>;
};

const UseEffectDemo = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const handleCounterChange = () => {
    setCounter(counter + 1);
  };

  const handleShowChange = () => {
    setShow(!show);
  };

  return (
    <>
      {show && <UseEffect counter={counter} />}
      <button onClick={handleCounterChange}>increment counter</button>
      <button onClick={handleShowChange}>show/hide component</button>
    </>
  );
};

export default UseEffectDemo;
