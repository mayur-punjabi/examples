export default () => {
  const list = [1, 2, 3, 4, 5, 6];

  return list.map((element, index) => <p key={index}>{element}</p>);
};
