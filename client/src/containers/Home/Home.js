import React, { useState, useEffect } from 'react';

const Home = () => {
  // Use state init a normal state with mutation func
  const [ count, setCount ] = useState(0);

  // Listener, triggered when a hook is used
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  

export default Home