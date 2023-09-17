import { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>current value {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </>
  );
};

// export default () => {
//   const [list, setList] = useState([0]);

//   const updateList = () => {
//     list.push(0);
//     // setList([...list, 0]);
//   };

//   return (
//     <>
//       <button onClick={updateList}>add item</button>
//       {list.map((element) => (
//         <p>{element}</p>
//       ))}
//     </>
//   );
// };
