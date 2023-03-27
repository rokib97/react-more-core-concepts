import React, { useState } from "react";

const Select = () => {
  const person = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
  const [name, setName] = useState(" Pick your favorite Simpson");
  const handleChnage = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <select
        value={name}
        onChange={handleChnage}
        className="select w-full max-w-xs"
      >
        {person.map((p) => (
          <option>{p}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
