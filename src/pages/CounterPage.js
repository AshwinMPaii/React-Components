//import { useState } from 'react';
import { useReducer } from 'react';
import Button from '../components/Button'
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';//These variables are called ACTION Types
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE = 'change-value';
const HANDLE_SUM = 'handle_sum'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      }
    case HANDLE_SUM:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      return state
  }

}

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);


  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  }
  )

  const handleIncrement = () => {
    dispatch(
      {
        type: INCREMENT_COUNT
      }
    );
    // setCount(count + 1);
  }
  const handleDecrement = () => {
    dispatch(
      {
        type: DECREMENT_COUNT
      }
    );
    // setCount(count - 1);
  }
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE,
      payload: value
    })
    // setValueToAdd(value);
  }
  const handleSum = (event) => {
    event.preventDefault();
    dispatch({
      type: HANDLE_SUM,
    })
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <form>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300' />
        <Button onClick={handleSum}>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage