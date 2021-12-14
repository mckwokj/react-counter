import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from "./CounterGroupSum";
import { useSelector } from "react-redux";

const MultiCounter = () => {
  const size = useSelector(state => state.size)
  const sum = useSelector(state => state.sum)

  return(
    <>
      <CounterSizeGenerator></CounterSizeGenerator>
      <CounterGroupSum sum={sum} />
      <CounterGroup size={size}/>
    </>
  )
}

export default MultiCounter