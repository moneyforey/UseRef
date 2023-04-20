import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  // const [value,setValue] =  useState();
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <h1>useRef</h1>

      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
