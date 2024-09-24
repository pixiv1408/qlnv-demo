import { useState, createContext } from "react";
import SAMPLE_DATA from "./data.sampel";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [list, setList] = useState(SAMPLE_DATA);

  return (
    <AppContext.Provider
      value={{
        list,
        setList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;