import InputFields from "../../components/InputFields/InputFields.jsx";
import { useForm } from "react-hook-form";
import NavLinks from "../../components/Navlinks/NavLinks.jsx";
import FetchNames from "../../components/FetchNames/FetchNames.jsx";
import {useState} from "react";


//will be better to add a review option at the location of the game, will have to figure out how to do this.
const ReviewPostPage = () => {
    const [selected, setSelected] = useState('');

        const { register, handleSubmit, reset, formState: { errors },setValue } = useForm();



    const onSubmit = async (data) => {

        if (!selected) {
            alert("Please select a valid name before submitting.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the review");
            }

            const result = await response.json();
            console.log("Review submitted successfully:", result);
            reset();
        } catch (error) {
            console.error("Error submitting the review:", error);
        }
    };

    const setNameOfItem = (name) => {
        setSelected(name);
        setValue("nameOfItem", name);
    };


    return (
        <main>
            <header>
                <h1>Post Reviews</h1>
            </header>
            <nav>
                <NavLinks to="/reviews" text="Reviews"/>
            </nav>
            <section className="section-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <FetchNames onValidName={(name) => setNameOfItem(name)} />
                    </div>
                    <div>
                        <InputFields
                            inputType="select"
                            inputId="wouldRecommend"
                            inputLabel="Recommend:"
                            title="wouldRecommend"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Please select true or false",
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <InputFields
                            inputType="textarea"
                            inputId="reviewText"
                            inputLabel="Review text:"
                            title="reviewText"
                            validationRules={{
                                required: {
                                value: true,
                            },
                                    minLength: {
                                    value: 50,
                                    message: "Please write a minimum of 50 characters",
                                },
                            }}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <button type="submit">Submit review</button>
                </form>
            </section>
            <footer>
                <p>footer area</p>
            </footer>
        </main>
    )


}

export default ReviewPostPage;


