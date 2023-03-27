import React, { useState } from "react";
import UserExample from "../UserExample/UserExample";

const ShortCurcuit = () => {
  const [text, setText] = useState("rokib");
  const [user, setUser] = useState({ name: "rokib" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h1>ShortCircuit Example</h1>
      {text && <UserExample hero name={user?.name} />}
      <button>{isEditing ? "Edit" : "Add"}</button>
      {user ? <div>{user?.name}</div> : "Please Login"}
    </div>
  );
};

export default ShortCurcuit;
