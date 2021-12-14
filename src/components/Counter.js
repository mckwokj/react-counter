import { useState } from "react"

const Counter = (props) => {
  const [number, setNumber] = useState(0);  

  const increase = () => {
    setNumber(number+1);
    props.increase();
  }

  const decrease = () => {
    setNumber(number-1);
    props.decrease();
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{number}</span>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default Counter; 