import React, {useEffect, useState} from "react";
import axios from "axios";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import './ReviewPage.css'

function ReviewPage() {

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


        useEffect(() => {
            const controller = new AbortController(); // For request cancellation
            const testReviews = async () => {
                try {
                    const response = await axios.get("http://localhost:8080/reviews", {
                        signal: controller.signal,
                    });
                    console.log("Fetched reviews:", response.data);
                    setReviews(response.data);
                    setError(false);
                } catch (err) {
                    if (err.name === "CanceledError") {
                        console.log("Request canceled:", err.message);
                    } else {
                        console.error("Error fetching reviews:", err.message);
                        setError(err.message);
                    }
                } finally {
                    setLoading(false);
                }
            };

            void testReviews();

            return () => {
                controller.abort();
            };
        }, []);

        useEffect(() => {
        }, [reviews])


        return (
            <main>
                <header>Reviews</header>
                <nav className="nav-class">
                    <NavLinks to="/" text="Homepage"/>
                    <NavLinks to="/reviewpostPage" text="Post review"/>
                </nav>
                <section className="review-section-container">
                    <ul className="list-style-review">
                        {reviews.map((review) => (
                            <li key={review.id} className="review-overview">
                                <strong>{review.id}</strong>
                                <p>Name of the item : {review.nameOfItem}</p>
                                <p>Would Recommend: {review.wouldRecommend ? "Yes" : "No"}</p>
                                <p>Review text: {review.reviewText}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <footer>
                    <p>footer area</p>
                </footer>
            </main>

        )
}


export default ReviewPage;