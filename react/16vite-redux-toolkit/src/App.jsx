import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './redux/features/counterSlice'



function App() { 

   const count = useSelector((state) => state.counter.value)
   const dispatch = useDispatch()

   console.log(count)
   
  return (
    <>
    <p>counter app</p>

    <button onClick={() => dispatch(increment())}>inc</button>
    <p>{count}</p>
    <button onClick={() => dispatch(decrement())}>dec</button>

    <button onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}

export default App
