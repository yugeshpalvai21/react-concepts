import { useContext } from "react";
import { AppContext } from './UseContextHook';

export const ChildContextHook = () => {
  const {name, setName} = useContext(AppContext);

  const handelNameChange = (e) => setName(e.target.value);
  
  return (
    <div>
      <h3>Name: {name} </h3>
      <input type="text" onChange={handelNameChange} />
    </div>
  );
}

