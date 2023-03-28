import React, { useContext } from "react";
import { UserContext } from "../../App";

const Child = () => {
  const { user, logOut, logIn } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      {user && (
        <div>
          <h2>UserName:{user.name}</h2>
        </div>
      )}
      {user ? (
        <button onClick={logOut} className="btn btn-primary btn-xs">
          LogOut
        </button>
      ) : (
        <button onClick={logIn} className="btn btn-error btn-xs">
          Login
        </button>
      )}
    </div>
  );
};

export default Child;
