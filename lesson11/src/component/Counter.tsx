import { useState, ReactNode, useReducer } from 'react';

const initialState = {
  count: 0,
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerActionType = {
  type: REDUCER_ACTION_TYPE;
};

const reducer = (
  state: typeof initialState,
  action: ReducerActionType
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1);
  // const increment = () => setCount((prev) => prev + 1);
  // const decrement = () => setCount((prev) => prev - 1);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{children(state.count)}</h1>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>
        decrement
      </button>
    </>
  );
};

export default Counter;
