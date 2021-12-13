import Counter from "./Counter"
import { useMemo } from "react"

function CounterGroup(props) {
  const increase = () => {
    props.increase()
  }

  const decrease = () => {
    props.decrease()
  }
  
  return (
    <div>
      { Array(props.size).fill().map((counter, index) => (<Counter key={index} increase={increase} decrease={decrease}></Counter>))}
    </div>
    )
  }
export default CounterGroup