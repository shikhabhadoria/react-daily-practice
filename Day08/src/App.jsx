import { useState , useRef } from 'react'
import Login from './Login';

function App() {
  const [time, setTimer] = useState(0)
  const IntervalIdRef = useRef(null);
  

  function handleStart() {

    if(IntervalIdRef.current != null){
      return;
    }

    IntervalIdRef.current = setInterval(() => {
      setTimer(time=>time + 1);
    } , 1000);
  }

  function handleStop() {
    clearInterval(IntervalIdRef.current);
    IntervalIdRef.current = null;
  }

  function handleReset() {
    clearInterval(IntervalIdRef.current);
    IntervalIdRef.current = null;

    setTimer(0);
  }

  return (
    <>
      <h1>Stopwatch: {time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
