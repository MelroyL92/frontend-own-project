import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom"
import FetchGameInfoContext from "./context/FetchGameInfoContext.jsx";
import FetchMovieInfoContext from "./context/FetchMovieInfoContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router>
        <FetchMovieInfoContext>
        <FetchGameInfoContext>
                        <App />
        </FetchGameInfoContext>
        </FetchMovieInfoContext>
    </Router>
)
