




const Reviews = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return <p>No reviews available for this item.</p>;
    }

    return (
        <ul>
            <h3>Reviews</h3>
            {reviews.map((review) => (
                <li key={review.id} className="review-class">
                    <p><strong>Title:</strong> {review.nameOfItem}</p>
                    <p><strong>Review:</strong> {review.reviewText}</p>
                    <p><strong>Recommend:</strong> {review.wouldRecommend ? "Yes" : "No"}</p>

                </li>
            ))}
        </ul>
    );
};

export default Reviews;