import { useContext } from "react";
import { UserContext } from "./GrandParent";

const useAppContextHook = () => useContext(UserContext);
export default useAppContextHook;
