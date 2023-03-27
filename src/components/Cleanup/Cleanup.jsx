import React, { useEffect, useState } from "react";

const Cleanup = () => {
  console.log("render");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>Cleanup</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Example />}
    </div>
  );
};

const Example = () => {
  useEffect(() => {
    console.log("this is fun");
    const id = setInterval(() => {
      console.log("hello from interval");
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("cleanup");
    };
  }, []);
  return <h1>Hello There</h1>;
};

export default Cleanup;
