import React, { useState, useEffect } from "react";
import './Games.css'
import axios from "axios";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import {Link} from "react-router-dom";

const MyGames = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }, [setError, setLoading]);

    return (
        <main>
            <header>
                <h1>Games List</h1>
            </header>
            <nav className="nav-class">
                <NavLinks to="/" text="Homepage"/>
            </nav>
            <section className="section-container">

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{color: "red"}}>Error: {error}</p>
                ) : (
                    <ul className="overview-list-item">
                        {games.map((game) => (
                            <li key={game.id}>
                                <strong><Link to={`/games/${game.id}`} className="link-style">{game.name}</Link></strong>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            <footer>
                <p>footer area</p>
            </footer>


        </main>
    );
};

export default MyGames;