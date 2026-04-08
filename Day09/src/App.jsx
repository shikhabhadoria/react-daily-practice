import { useState } from 'react'

function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Password, setPassword] = useState("");

  function handleSubmit(e) {
    console.log(Name, Age, Password);
    e.preventDefault();
  }

  console.log("render");
  return (
    <>

    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' value={Name} onChange={(e)=>setName(e.target.value)} ></input>
      </div>

      <div>
        <input type='number' value={Age} onChange={(e)=>setAge(e.target.value)} ></input>
      </div>

      <div>
        <input type='text' value={Password} onChange={(e)=>setPassword(e.target.value)} ></input>
      </div>
    <button type='submit'>Submit</button>
    </form>
      
    </>
  )
}

export default App
