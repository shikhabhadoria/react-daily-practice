import { useState } from 'react';
import Counting from './Counting';
function Clock() {
    const [clocks , setClocks] = useState(["A" , "B" , "C"]);

    function handChange() {
        setClocks(["D" , "A" , "B" , "C"]);
    }

    return (
        <>
        <button onClick={handChange}>Increment Clocks</button>
        <div>
            {clocks.map(clock => <Counting name={clock}key={clock} />)}
        </div>
        </>
    );
}

export default Clock;