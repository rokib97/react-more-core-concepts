import React, { useState } from "react";

const Checkbox = () => {
  const [check, setCheck] = useState(false);
  const handleChnage = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="w-[50%] mx-auto">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Remember me</span>
          <input
            checked={check}
            type="checkbox"
            onChange={handleChnage}
            className="checkbox checkbox-secondary"
          />
        </label>

        <button
          onClick={() => console.log("clicked")}
          className={`btn btn-sm ${check ? "hidden" : "block"}`}
        >
          Small
        </button>
      </div>
    </div>
  );
};

export default Checkbox;
