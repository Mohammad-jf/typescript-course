import Counter from "./component/Counter";
// import App1 from './component/App1';



const App = () => {
  return (
    <>
      {/* <App1 /> */}
      {/* <App2/> */}
      <Counter>{(num: number) => <>current Count:{num}</>}</Counter>
    </>
  );
};

export default App;
