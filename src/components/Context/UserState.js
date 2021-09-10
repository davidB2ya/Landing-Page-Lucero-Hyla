import React ,{ useState, useContext } from "react";
import list from '../DataBase/products.json';

export const AppContext = React.createContext([{}, () => {}])

const stateInitial = {
    products:list,
    cart:[]

}

export default function AppProvider({ children }) {
    const [state, setState] = useState(stateInitial)

    return 
    <AppContext.Provider value={state}>
        {children}
    </AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext)
  }

