import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleShowAlert = () => {
    alert("Tombol ditekan!");
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="container">
        <h1 className="count-text">Count: {count}</h1>
       
        <div className="button-group">
          <button className="btn btn-add" onClick={handleIncrement}>
            Tambah
          </button>
          <button className="btn btn-subtract" onClick={handleDecrement}>
            Kurang
          </button>
        </div>

        <div className="popup-section">
          <button className="btn btn-popup" onClick={handleShowAlert}>
            Tampilkan Pop Up
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;