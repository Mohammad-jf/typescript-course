import { ReactNode } from 'react';

type CounterProps = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment +</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement -</button>
    </>
  );
};

export default Counter;
