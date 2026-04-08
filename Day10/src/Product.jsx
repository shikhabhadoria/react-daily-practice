import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "./App.jsx";

function Product({ item }){
    const [addToCart, setAddTOCart] = useState(false);
    const { cartItem, setCartItem } = useContext(ProductContext);
    return (
        <>
        <div>
            <h1>Name: {item.name}</h1>
            <h1>Price: {item.price}</h1>
            {
                addToCart ? <button onClick={()=>{setAddTOCart(0), setCartItem(cartItem - 1)}}>Remove</button> : <button onClick={()=>{setAddTOCart(1) , setCartItem(cartItem + 1)}}>Add</button>
            }
        </div>
        </>
    ) 
}

export default Product;