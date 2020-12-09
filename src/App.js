import React, { useState } from 'react';



const App = () => {

  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }

  // const state = useState();
  const [count, setCount] = useState(0);


  const IncNum = () => {
    setCount(count + 1);
    //console.log('clicked '+ count++);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Increment</button>
      <br /><br /><br /><br /><br />
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>Get time!</button>
    </>

  );

};

export default App;