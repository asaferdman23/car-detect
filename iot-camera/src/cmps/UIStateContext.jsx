import React,{createContext,useContext,useState  } from "react";

const UIStateContext = createContext();

export const useUIStateProvider = ({children}) => {

    const [homeUIState, setHomeUIState] = useState({});
    const [heloUIState, setHeloUIState] = useState({});
    return (
        <UIStateContext.Provider value={{homeUIState,setHomeUIState,heloUIState,setHeloUIState}}>
            {children}
        </UIStateContext.Provider>
    )
}
export const useUIStateContext = () => useContext(UIStateContext);