import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let count = 5;

  const addValue = ()=>{
    // counter++;
    counter = counter+1
    setCounter(counter)
    console.log(counter)
  }

  const removeValue = ()=>{
    counter = counter-1
    if (counter <0) {
      setCounter(0);
      counter=0;
    }
    else setCounter(counter)
    console.log(counter)
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>counter val : {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>decrease value</button>
    </>
  )
}

export default App
