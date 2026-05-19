import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)
  
  return (
    <div>
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