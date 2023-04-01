import React, { useState } from "react";

const Example = () => {
  const [name, setName] = useState("");

  const [user, setUser] = useState([
    { id: 1, name: "Rokib" },
    { id: 2, name: "Sabrina" },
    { id: 3, name: "Titu" },
    { id: 4, name: "Sakib" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) return;
    const createdUser = {
      id: Date.now(),
      name: name,
    };
    setUser([...user, createdUser]);
    setName("");
  };
  const handleDelete = (id) => {
    setUser(user.filter((value) => value.id !== id));
  };

  return (
    <div>
      <h1 className="text-center">Hello</h1>
      <form onSubmit={handleSubmit} className="text-center ">
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Type here"
            className="input input-bordered w-full h-6"
          />
        </div>

        <button type="submit" className="btn btn-outline btn-error btn-xs">
          Add User
        </button>
      </form>
      <div className="text-center">
        {user.map((singleUSer) => (
          <div key={singleUSer.id}>
            <h2>{singleUSer.name}</h2>
            <button
              onClick={() => handleDelete(singleUSer.id)}
              className="btn-xs btn btn-error"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
