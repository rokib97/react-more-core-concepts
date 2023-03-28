import React from "react";
import useGithubUser from "./useGithubUser";
import useToggle from "./useToggle";

const CustomHook = () => {
  const { show, toggle } = useToggle(false);
  const {
    data: value,
    isLoading,
    error,
  } = useGithubUser(`https://api.github.com/users/rokib97`);

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
