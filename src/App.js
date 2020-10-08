import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggle } from "./actions/index";
import "./App.css";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p> Hello {counter}</p>
      {isLogged ? <h3>Boolean</h3> : ""}
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(toggle())}>Toggle</button>
    </div>
  );
};

export default App;
