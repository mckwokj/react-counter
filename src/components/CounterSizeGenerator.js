import { useState } from "react"

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0)
  
  function handleChangeSize(event) {
    const sizeValue = event.target.value > 0 && event.target.value <= 100 ? parseInt(event.target.value) : 0
    setSize(sizeValue)
    props.updateCounterSize(sizeValue)
  }

  return (
    <div>
      <span>Size:</span>
      <input type="number" value={size} onChange={handleChangeSize} min={0}></input>
    </div>
  )
}

export default CounterSizeGenerator