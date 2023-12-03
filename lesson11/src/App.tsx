import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';

// interface User {
//   id: number;
//   userName: string;
// }

type fibfunc = (n: number) => number;

const fib: fibfunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  // const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null!);

  const addTwo = useCallback(() => setCount((prev) => prev + 1), []);

  const result = useMemo(() => fib(myNum), [myNum]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}></button>
      <h2>{result}</h2>
    </>
  );
}

export default App;
