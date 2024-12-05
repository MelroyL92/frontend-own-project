import React, { useState, useEffect } from "react";
import axios from "axios"; // Optional: If you're using Axios

const MyGames = () => {
    const [games, setGames] = useState([]); // To hold the list of games
    const [error, setError] = useState(null); // To hold any error messages
    const [loading, setLoading] = useState(true); // To track the loading state

    useEffect(() => {
        axios
            .get("http://localhost:8080/games")
            .then((response) => {
                console.log("Fetched games:", response.data);
                setGames(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching games:", err.message);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Games List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>
                            <strong>{game.name}</strong> - {game.genre}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyGames;