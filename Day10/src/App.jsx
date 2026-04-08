import { useState, createContext } from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

// export const CounterContext = createContext(); 
export const ProductContext = createContext();

function App() {

  // const [count, setCount] = useState(0);

  const [cartItem, setCartItem] = useState(0);

  return (
    <>
    <ProductContext.Provider value={{ cartItem, setCartItem }}>
      <Header />
      <Body />
      <Footer />
    </ProductContext.Provider>
    </>
  )
}

export default App
