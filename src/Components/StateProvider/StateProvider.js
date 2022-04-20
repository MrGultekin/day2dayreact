import {createContext, useContext,useReducer} from "react";
//prepares the data layer
export const StateContext = createContext(undefined);
// Wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );
export const StateProvider = ({ reducer, initialState, children}) => {
    return (<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>)
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);