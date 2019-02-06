import React, { useState, useEffect } from 'react';

const Home = () => {
  // Use state init a normal state with mutation func
  const [ count, setCount ] = useState(0);
  const [ age, setAge ] = useState(18);

  // Listener, triggered after each render
  useEffect(() => {
    console.log('effect');

    return () => {
      console.log('effect callback');
    };
  }, [count]); // 2nd param contain array of value(s), if one change, useEffect will be called

  return (
    <div>
      <p>You clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setAge(age + 1)}>
        Don't click !
      </button>
    </div>
  );
}
  

export default Home