import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter=()=>{
    if(counter>=20){
      alert("Counter value cannot be greater than 20");
      return;
    }
    setCounter(counter+1);
  };

  const decrementCounter=()=>{
    if(counter<=0){
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter-1);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementCounter}>Add value</button>
      <br />
      <button onClick={decrementCounter}>Subtract value</button>
    </>
  );
}

export default App;
