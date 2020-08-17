// setup data layer
// we need to do this to track basket

import React,{ createContext,useContext, useReducer } from "react";

// This is data layer
export const StateContext = createContext()
 // Creating a provider

 export const StateProvider=({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
 )


 //this is how we used it in component
 export const useStateValue=()=>useContext(StateContext);