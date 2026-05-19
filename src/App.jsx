import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {

  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Navbar />
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Tambah</button>
      <button onClick={()=>setCount(count - 1)}>Kurang</button>

      <div>
        <button onClick={()=> alert("Tombol ditekan!")}>Tampilkan Pop Up</button>
      </div>
    </div>
  )
}

export default App