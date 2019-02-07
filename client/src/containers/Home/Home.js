import React, { Fragment, useState, useEffect, useRef } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(500);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);

  return (
    <Fragment>
      <h1>{count}</h1>
      <div>
        Mettre en pause le timer <input type="checkbox" onChange={() => setIsRunning(isRunning ? false : true)}/>
      </div>
    </Fragment>
  );
}


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        // I execute my callback
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },
    [delay]
  );
}

export default Home