import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_SUM } from "../constants/constants";

const Counter = (props) => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch()

  const increase = () => {
    // setNumber(number+1);
    dispatch({type: UPDATE_SUM, payload: 1})
  }

  const decrease = () => {
    // setNumber(number-1);
    dispatch({type: UPDATE_SUM, payload: -1})
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