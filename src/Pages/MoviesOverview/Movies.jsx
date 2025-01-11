import React, {useEffect, useState} from "react";
import axios from "axios";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import {Link} from "react-router-dom";
import './Movies.css'

const MyMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController(); // For request cancellation
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:8080/movies", {
                    signal: controller.signal, // Pass the signal to the request
                });
                console.log("Fetched movies:", response.data);
                setMovies(response.data);
                setError(null); // Clear any previous errors
            } catch (err) {
                if (err.name === "CanceledError") {
                    console.log("Request canceled:", err.message);
                } else {
                    console.error("Error fetching movies:", err.message);
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

        return () => {
            controller.abort();
        };
    }, []);

    if (loading) return <p>Loading movies...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <main>
            <header>
                <h1>Movies List</h1>
            </header>
            <nav className="nav-class">
                <NavLinks to="/" text="Homepage"/>
                <NavLinks to="/games" text="Games"/>
            </nav>
            <section className="section-container">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{color: "red"}}>Error: {error}</p>
                ) : (
                    <ul className="ul-list-style-movies">
                        {movies.map((movie) => (
                            //change the name for this class
                            <li key={movie.id} className="movies-list">
                                <strong><Link to={`/movies/${movie.id}`} className="link-style">{movie.name}</Link></strong>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            <footer>
                <p>Footer area</p>
            </footer>
        </main>
    );
};


export default MyMovies;
