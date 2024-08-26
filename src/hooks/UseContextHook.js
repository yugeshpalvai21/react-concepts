import { createContext, useState } from "react";
import { ChildContextHook } from './ChildContextHook';

export const AppContext = createContext(null);

export const UseContextHook = () => {
  const [name, setName] = useState('');
  return (
    <AppContext.Provider value={{name, setName}}>
      <ChildContextHook />
    </AppContext.Provider>
  );
}
