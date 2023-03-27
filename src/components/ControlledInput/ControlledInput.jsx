import React, { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   console.log(name, email);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <div>
      <h1 className="text-center">Controlled Input</h1>
      <form onSubmit={handleForm}>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Type here"
            value={name}
            className="input-bordered"
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your Email?</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Type here"
            className="input-bordered"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-xs mt-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ControlledInput;
