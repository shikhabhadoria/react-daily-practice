
import { useState, useCallback, useMemo } from 'react';
import Sum from './Sum.jsx'
import Post from './Post.jsx';
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);


  const handleClick = useCallback(()=>{
    console.log("handle Click " , count);
  }, [count]);

  let prime = useMemo(()=>{
      function CalculatePrime() {
      let total = 0;

      if(number > 1){
        total++;
      }

      for(let i=3; i<=number; i++){
        total++;
        for(let j=2; j<i; j++){
          if(i%j==0){
            total--;
            break;
          }
        }
      }

      return total;
    }

    return CalculatePrime();
  }, [number])
  
  const obj = useMemo(()=>{
    return {name:"shikha" , age:22};
  }, [])
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>Your current Number: {number}</h2>
      <button onClick={()=>setNumber(number+100)}>Increment Number</button>
      <h3>Total prime number: {prime}</h3>
      <button onClick={handleClick}>Handle Click</button>
      <Sum number={number} />
      <Post value={obj} />
    </>
  )
}

export default App
