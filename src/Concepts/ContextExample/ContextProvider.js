// MyContext.js
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState(["Dheeraj",21 ,"amc"]);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
//  here we are sending the data  that is inside the store,
//  so that any child components can access, that may be updated from any child, 
  return useContext(MyContext);
};
