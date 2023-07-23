import { useState, useEffect } from 'react';

const Person = (props: { name: string, age?: number }) => {
  return (
    <>
      <p>My name is {props.name}</p>
      <p>I'm {props.age || 0} years old</p>
    </>
  )
}

const App = () => {
  const name = 'Lucas';

  const [age, setAge] = useState(0);

  useEffect(() => {
    alert("Hello, World!");
  }, [age]);  
  
  return (
    <div className='App'>
      <h1>Hello, {name}!</h1>
      <Person name="Sagna" age={29}/>
      <h2>How old are you?</h2>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>+</button>
      <p>{age}</p>
      <button onClick={() => setAge((prevAge) => prevAge - 1)}>-</button>
    </div>
  );
}

export default App