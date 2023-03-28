import React, { useRef } from "react";

const UseRef = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center ">
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            ref={refContainer}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full h-12"
          />
        </div>

        <button type="submit" className="btn btn-outline btn-error btn-xs">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UseRef;
