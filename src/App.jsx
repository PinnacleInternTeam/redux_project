
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,add } from './actions/IndexAction';


//store used as global state
//action to increment
//reduecer
//dispatch
 

function App() {
  const counter = useSelector(state=>state.counter);
  const islogged = useSelector(state =>state.islogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>counter {counter}</h1>
     {islogged ? <h3>your are logged in</h3> : <h3>your are not logged in</h3>}
     <button onClick={()=>dispatch(increment())}>increment</button> 
     <button onClick={()=>dispatch(decrement())}>decrement</button>
     <button onClick={()=>dispatch(add(10))}>add</button>
     
    </div>
  )
}

export default App
