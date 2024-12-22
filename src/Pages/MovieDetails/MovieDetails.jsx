import React, {useContext, useEffect, useState} from "react";
import {FetchMovieInfoContext} from "../../context/FetchMovieInfoContext.jsx";
import {useParams} from "react-router-dom";
import './MovieDetails.css'
import axios from "axios";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import Image from "../../helpers/image.jsx";
import DetailedInfoPage from "../../components/DetailedInfo/DetailedInfoPage.jsx";


function MovieDetails() {
    const [error, toggleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {fetchedMovie, setFetchedMovie} = useContext(FetchMovieInfoContext)

    let {id} = useParams();

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
                ]}/>
            <footer>
                <p>this is the footer section</p>
            </footer>
        </main>

    )
}


export default MovieDetails;