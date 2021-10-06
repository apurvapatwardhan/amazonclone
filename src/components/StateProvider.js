import React, { useContext, useReducer } from "react";

const StateContext = React.createContext();

function StateProvider(props) {
  return (
    <StateContext.Provider
      value={useReducer(props.reducer, props.initialState)}
    >
      {props.children}
    </StateContext.Provider>
  );
}
const useStateValue = () => useContext(StateContext);

export { StateProvider, useStateValue };
