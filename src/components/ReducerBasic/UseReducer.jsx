import React, { useState } from "react";
import { guns } from "../../../data";
const UseReducer = () => {
  const [people, setPeople] = useState(guns);

  const handleDelete = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };

  return (
    <div className="text-center">
      <div>
        {people.map((d) => (
          <>
            <p key={d.id}>{d.name}</p>
            <button
              onClick={() => handleDelete(d.id)}
              className="btn btn-xs btn-primary"
            >
              remove
            </button>
          </>
        ))}
      </div>
      {people.length < 1 ? (
        <button
          onClick={() => setPeople(guns)}
          className="btn btn-primary mt-4 btn-xs"
        >
          Reset
        </button>
      ) : (
        <button
          onClick={() => setPeople([])}
          className="btn btn-primary mt-4 btn-xs"
        >
          clear
        </button>
      )}
    </div>
  );
};

export default UseReducer;
