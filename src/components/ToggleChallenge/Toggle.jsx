import React, { useState } from "react";

const Toggle = () => {
  const [showAlart, setShowAllart] = useState(false);
  return (
    <div>
      <button onClick={() => setShowAllart(!showAlart)}>Toggle</button>
      {showAlart && <p>showing ALart</p>}
    </div>
  );
};

export default Toggle;
