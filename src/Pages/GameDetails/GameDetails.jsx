import React, {useContext, useEffect, useState} from "react";
import Abortcontroller from "../../helpers/Abortcontroller.js";
import axios from "axios";
import {useParams} from "react-router-dom";
import {FetchGameInfoContext} from "../../context/FetchGameInfoContext.jsx";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import './GameDetails.css'
import DetailedInfoPage from "../../components/DetailedInfo/DetailedInfoPage.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";


function GameDetails() {
    const [error, toggleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {fetchedGame, setFetchedGame} = useContext(FetchGameInfoContext);


    let {id} = useParams();
    Abortcontroller();

    useEffect(() => {
        async function fetchedGame() {
            toggleError(false);
            setLoading(true);

            try {
                const response = await axios.get(`http://localhost:8080/games/${id}`);
                setFetchedGame(response.data);
            } catch (error) {
                console.log(error);
                toggleError(true);
            } finally {
                setLoading(false);
            }
        }

        void fetchedGame()
    }, []);

    console.log({fetchedGame})

    useEffect(()=>{
    },[fetchedGame])


    return (
        <main>
            <header>
                <h1>{fetchedGame.name}</h1>
            </header>
            <nav className="nav-class">
                <NavLinks to="/" text="Homepage"/>
                <NavLinks to="/games" text="Games"/>
            </nav>

            <DetailedInfoPage
                title={fetchedGame.title}
                description={fetchedGame.description}
                imageUrl={fetchedGame.imageUrl}
                fields={[
                    {label: "Average Rating : ", value: fetchedGame.averageRating},
                    {label: "Publisher : ", value: fetchedGame.publisher},
                    {label: "Year of Release :", value: fetchedGame.yearOfRelease},
                    {label: "price: € ", value: fetchedGame.sellingPrice},
                ]}
                reviews={fetchedGame.reviews}
            />

            <footer>
                <p>this is the footer section</p>
            </footer>
        </main>

    )


}

export default GameDetails;