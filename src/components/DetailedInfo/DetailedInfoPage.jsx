import Image from "../../helpers/image.jsx";
import React from "react";
import PropTypes from "prop-types";
import Reviews from "../Reviews/Reviews.jsx";
import './DetailledInfoPage.css'



function DetailedInfoPage({imageUrl, description, fields, reviews}) {


    return (
        <section className="section-container">
            <ul className="main-box">
                <div className="box-1">
                    <div className="description-item">
                        <Image
                            src={imageUrl}
                            alt="game poster"
                        />
                        <li><p>Description :{description}</p></li>
                    </div>
                </div>
                <div className="box-2">
                    {fields.map((field, index) => (
                        <li key={index}>
                            <p>
                                <strong>{field.label}</strong>{field.value}
                            </p>
                        </li>
                    ))}
                    <Reviews reviews={reviews}/>
                </div>
            </ul>
        </section>
    )
}

DetailedInfoPage.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
};

export default DetailedInfoPage;