import {children, createContext, useState} from "react";


export const FetchGameInfoContext = createContext({});


const FetchGameInfoProvider = ({children}) => {
    const [fetchedGame, setFetchedGame] = useState({});

    const data = {
        fetchedGame, setFetchedGame,
    }

    return(
        <FetchGameInfoContext.Provider value={data}>{children}</FetchGameInfoContext.Provider>
    );
};

export default FetchGameInfoProvider;