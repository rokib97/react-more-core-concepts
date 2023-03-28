import React, { createContext, useState } from "react";
import Parent from "./components/ContextApi/Parent";

export const UserContext = createContext(null);

const App = () => {
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
      <div>
        {/* <ShortCurcuit /> */}
        {/* <Toggle /> */}
        {/* <ToggleUSer /> */}
        {/* <Cleanup /> */}
        {/* <Home /> */}
        {/* <About /> */}
        {/* <ControlledInput /> */}
        {/* <Example /> */}
        {/* <MultipleInput /> */}
        {/* <Checkbox /> */}
        {/* <Select /> */}
        {/* <UseRef /> */}
        {/* <CustomHook /> */}
        <Parent />
      </div>
    </UserContext.Provider>
  );
};

export default App;
