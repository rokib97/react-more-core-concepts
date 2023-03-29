import React from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";

const CustomHook = () => {
  const { show, value, toggle, isLoading, error } = useGlobalContext();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>something went errro......</p>;
  }
  return (
    <div className="text-center">
      <h2>Toggle Custom Hook</h2>
      <button onClick={() => toggle(!show)} className="btn btn-xs btn-primary">
        Toggle
      </button>
      {show && <p>toggling and showing</p>}
      <h1>{value.name}</h1>
    </div>
  );
};

export default CustomHook;
