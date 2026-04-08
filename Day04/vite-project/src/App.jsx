import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    // console.log(count);
    // const para = document.querySelector('p');
    // para.textContent = `Counter: ${count}`;
    // const button = document.querySelector('button');
    // button.textContent = `Increment ${count}`;
  } 

  return (
    <>
    <p>Counter: {count}</p>
    <button onClick={increment}>Increment: {count}</button>
    </>
  );
}

export default App;