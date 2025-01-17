import React, {useContext, useEffect, useState} from "react";
import {FetchMovieInfoContext} from "../../context/FetchMovieInfoContext.jsx";
import {useParams} from "react-router-dom";
import './MovieDetails.css'
import axios from "axios";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import DetailedInfoPage from "../../components/DetailedInfo/DetailedInfoPage.jsx";
import Abortcontroller from "../../helpers/Abortcontroller.js";
import Reviews from "../../components/Reviews/Reviews.jsx";


function MovieDetails() {
    const [error, toggleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {fetchedMovie, setFetchedMovie} = useContext(FetchMovieInfoContext)

    let {id} = useParams();
    Abortcontroller();


    useEffect(() => {
        async function fetchedMovie() {
            toggleError(false);
            setLoading(true);

            try{
                const response = await axios.get(`http://localhost:8080/movies/${id}`);
                setFetchedMovie(response.data);
            } catch (error) {
                console.log(error);
                toggleError(true);
            } finally {
                setLoading(false);
            }
        }

       void fetchedMovie();
    }, []);

    useEffect(() => {

    }, [fetchedMovie]);


    return (
        <main>
            <header>
                <h1>{fetchedMovie.name}</h1>
            </header>
            <nav className="nav-class">
                <NavLinks to="/" text="Homepage"/>
                <NavLinks to="/movies" text="Movies"/>
            </nav>
            <DetailedInfoPage
                title={fetchedMovie.title}
                description={fetchedMovie.description}
                imageUrl={fetchedMovie.imageUrl}
                fields={[
                    {label : "Playtime :", value: fetchedMovie.playTimeInMinutes},
                    {label : "Director : ", value: fetchedMovie.director},
                    {label : "Genre : ", value: fetchedMovie.genre},
                    {label : "Price : €", value: fetchedMovie.sellingPrice},
                    {label : "Year of release ", value: fetchedMovie.yearOfRelease},
                ]}
                reviews={fetchedMovie.reviews}
            />


            <footer>
                <p>this is the footer section</p>
            </footer>
        </main>

    )
}


export default MovieDetails;