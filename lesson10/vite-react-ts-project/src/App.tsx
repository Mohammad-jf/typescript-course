import Counter from './component/Counter';
import Heading from './component/Heading';
import List from './component/List';
import Section from './component/Section';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello world!</h1>
      <Heading title='React ts project' />
      <Section title='subHeading'>{2 * 6}</Section>
      <Counter setCount={setCount}> count is {count}</Counter>
      <List
        items={['mohammad', 'ali', 'reza', 'hossein']}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
