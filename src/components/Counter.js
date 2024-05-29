import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch(); //basicamente a ação, ele gera uma função pra ser usada como a ação
  const counter = useSelector(state => state.counter.counter); //basicamente a subscription relatada no diagrama mas apenas para o counter
  const show = useSelector(state => state.counter.showCounter); //basicamente a subscription relatada no diagrama mas apenas para o showCounter

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
