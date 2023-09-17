export default () => {
  const show = true;

  return (
    <>
      <Null />
      <Ternary />
      {show ? <p>inline Ternary </p> : null}
      <And />
      {show && <p>inline And</p>}
      <p className={show && "red-text"}>conditional attribute</p>
    </>
  );
};

const Null = () => {
  const show = true;

  if (show) {
    return <p>Null</p>;
  }
  return null;
};

const Ternary = () => {
  const show = false;
  return show ? <p>Ternary</p> : <></>;
};

const And = () => {
  const show = true;
  return show && <p>And</p>;
};
