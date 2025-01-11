import React, { useState} from "react";
import axios from "axios";


function FetchNames({onValidName}) {
        const [type, setType] = useState('movies');
        const [name, setName] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const [isValidName, setIsValidName] = useState(false);


    const fetchSuggestions = async (searchTerm) => {
            try {
                const response = await axios.get(`http://localhost:8080/${type}?name=${searchTerm}`);
                const data = response.data;
                const names = data.map(item => item.name);
                setSuggestions(names);
            } catch (error) {
                console.log(error);
            }
        }

    const handleInputChange = (e) => {
        const value = e.target.value;
        setName(value);
        setIsValidName(false); // Reset validity if name changes

        if (value) {
            fetchSuggestions(value);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (selectedName) => {
        setName(selectedName);
        setIsValidName(true);
        setSuggestions([]);
        onValidName(selectedName);
    };



    return (
        <div>
            <label htmlFor="type">Type</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="movies">Movie</option>
                <option value="games">Game</option>
            </select>

            <label htmlFor="title">Review Title</label>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            {!isValidName && name && <p>Please select a valid name from the suggestions.</p>}
        </div>
    );
}


export default FetchNames;