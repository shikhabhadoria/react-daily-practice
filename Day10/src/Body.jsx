import Product from "./Product.jsx";
import { useState } from "react";

function Body() {
    const [item, setItem] = useState([
        { id: 1, name: "item1", price: 100 },
        { id: 2, name: "item2", price: 200 },
        { id: 3, name: "item3", price: 300 },
        { id: 4, name: "item4", price: 400 },
        { id: 5, name: "item5", price: 500 }
    ]);


    return (
        <>
        <h1>I am the Blinkit Body</h1>
        {/* <Counter count={count} setCount={setCount} /> */}
        <div style={{ display: "flex", gap: "50px" }}>
            {
            item.map((item) => <Product key={item.id} item={item} />)
            }
        </div>
        </>
    )
}

export default Body;