import Counter from "./Counter"

const CounterGroup = (props) => {  
  return (
    <div>
      { Array(props.size).fill().map((counter, index) => (<Counter key={index}></Counter>))}
    </div>
    )
  }
export default CounterGroup