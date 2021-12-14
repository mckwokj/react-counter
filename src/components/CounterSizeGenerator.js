import { useDispatch, useSelector } from "react-redux"
import { RESET_SUM, UPDATE_SIZE } from "../constants/constants";

const CounterSizeGenerator = (props) => {
  const dispatch = useDispatch();
  const size = useSelector(state => state.size)

  const handleChangeSize = (event) => {
    const sizeValue = event.target.value > 0 && event.target.value <= 100 ? parseInt(event.target.value) : 0
    dispatch({type: UPDATE_SIZE, payload: sizeValue})
    dispatch({type: RESET_SUM})
  }

  return (
    <div>
      <span>Size:</span>
      <input type="number" value={size} onChange={handleChangeSize} min={0}></input>
    </div>
  )
}

export default CounterSizeGenerator