import React, { useState } from "react";

function App() {

  const [count, setCount]  = useState(4);

  function decreaseCount() {
    setCount(count - 1)
  }

  function increaseCount(){
    setCount(count + 1)
  }

  return (
      
      <div>
        <button className="Minus" onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button className="Plus" onClick={increaseCount}>+</button>
      </div>
  );
}

export default App;
