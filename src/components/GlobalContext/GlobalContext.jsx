import { createContext, useContext } from "react";
import useFetch from "../CustomHook/useFetch";
import useToggle from "../CustomHook/useToggle";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const { show, toggle } = useToggle(false);
  const {
    data: value,
    isLoading,
    error,
  } = useFetch(`https://api.github.com/users/rokib97`);
  return (
    <GlobalContext.Provider value={{ show, toggle, value, isLoading, error }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
