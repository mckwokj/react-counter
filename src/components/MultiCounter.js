import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import { useState } from "react"
import CounterGroupSum from "./CounterGroupSum";

const MultiCounter = () => {
  const [size, setSize] = useState(0)

  const [sum, setSum] = useState(0)

  function updateCounterSize(counterSize) {
    setSize(counterSize)
    setSum(0)
  }

  const increase = () => {
    setSum(sum + 1)
  }

  const decrease = () => {
    setSum(sum - 1)
  }

  return(
    <>
      <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
      <CounterGroupSum sum={sum} />
      <CounterGroup size={size} increase={increase} decrease={decrease}/>
    </>
  )
}

export default MultiCounter