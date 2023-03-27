import React, { useState } from "react";

const ToggleUSer = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    setUser({ name: "Rokib" });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>{user?.name}</h1>
          <button onClick={handleLogOut}>logout</button>
        </div>
      ) : (
        <div>
          <h1>Please logIn</h1>
          <button onClick={handleLogin}>logIn</button>
        </div>
      )}
    </div>
  );
};

export default ToggleUSer;
