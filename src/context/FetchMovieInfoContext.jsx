import {children, createContext, useState} from "react";


export const FetchMovieInfoContext = createContext({});

const FetchMovieInfoProvider = ({children}) => {
    const [fetchedMovie, setFetchedMovie] = useState({});

    const data = {
        fetchedMovie,setFetchedMovie,
    }

    return(
        <FetchMovieInfoContext.Provider value={data}>{children}</FetchMovieInfoContext.Provider>
    );

};

export default FetchMovieInfoProvider;