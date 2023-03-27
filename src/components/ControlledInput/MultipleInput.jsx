import React, { useState } from "react";

const MultipleInput = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleUser}>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your Email?</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            value={user.email}
            className="input-bordered"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your PassWord?</span>
          </label>
          <input
            type="password"
            value={user.password}
            placeholder="Type here"
            className="input-bordered"
            name="password"
            onChange={handleChange}
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

export default MultipleInput;
