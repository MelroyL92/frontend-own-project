import './App.css'
import {Route, Routes} from "react-router-dom";
import MyGames from "./Pages/GamesOverview/Games.jsx";
import MyMovies from "./Pages/MoviesOverview/Movies.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import GameDetails from "./Pages/GameDetails/GameDetails.jsx";
import MovieDetails from "./Pages/MovieDetails/MovieDetails.jsx";
import ReviewPage from "./Pages/ReviewPage/ReviewPage.jsx";
import ReviewPostPage from "./Pages/reviewPostPage/reviewPostPage.jsx";


function App() {


    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/games" element={<MyGames/>}/>
            <Route path="/movies" element={<MyMovies/>}/>
            <Route path="/games/:id" element={<GameDetails/>}/>
            <Route path="/movies/:id" element={<MovieDetails/>}/>
            <Route path="/reviews" element={<ReviewPage/>}/>
            <Route path="/reviewpostPage" element={<ReviewPostPage/>}/>
        </Routes>
    )
}

export default App