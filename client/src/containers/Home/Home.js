import React, { useState } from 'react';

const Home = () => {
  // Use state init a normal state with mutation func
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  

export default Home