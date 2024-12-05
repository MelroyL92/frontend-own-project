import React, {useEffect, useState} from "react";
import axios from "axios";

const MyMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8080/movies")
            .then((response) => {
                console.log("Fetched movies:", response.data);
                setMovies(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching movies:", err.message);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Movies List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <strong>{movie.name}</strong> - {movie.genre}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default MyMovies;
