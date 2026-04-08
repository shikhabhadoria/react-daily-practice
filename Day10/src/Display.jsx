import { useContext } from "react";
import { CounterContext } from "./App.jsx";

function Display() {
    // const { count } = useContext(CounterContext);
    return (
        <>
            <h1>I am displaying count: {count}</h1>
        </>
    );
}

export default Display;