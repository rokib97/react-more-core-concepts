import React, { useEffect, useState } from "react";

const Cleanup = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <h1 className="text-center text-4xl my-6">useEffect Cleanup Function</h1>
      <div className="text-center">
        <button className="btn btn-primary " onClick={() => setToggle(!toggle)}>
          Toggle
        </button>
      </div>
      {toggle && <Example />}
    </div>
  );
};

const Example = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Inside interval");
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("cleaned up");
    };
  }, []);
  return <h1 className="text-center text-3xl my-4">Hello There</h1>;
};

export default Cleanup;
