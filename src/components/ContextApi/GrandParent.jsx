import React, { createContext, useState } from "react";
import Parent from "./Parent";
export const UserContext = createContext(null);

const GrandParent = () => {
  const [user, setUser] = useState({ name: "rokib" });
  const logOut = () => {
    setUser(null);
  };
  const logIn = () => {
    setUser({ name: "rokib" });
  };
  console.log(user);
  return (
    <UserContext.Provider value={{ user, logOut, logIn }}>
      <Parent />
    </UserContext.Provider>
  );
};

export default GrandParent;
