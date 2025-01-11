

const InputFields = ({inputId,inputType,inputLabel,validationRules, register, errors, title, value, onChange,suggestions = [], onSuggestionClick = () => {}}) =>{




    return(
        <>
            <label htmlFor={inputId}>
                {inputLabel}
                {inputType === "select" ? (
                    <select id={inputId} {...register(title, validationRules)}>
                        <option value="">Select...</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                ) : inputType === "textarea" ? (
                    <textarea id={inputId} {...register(title, validationRules)} />
                ) : (
                    <div>
                        <input
                            type={inputType}
                            id={inputId}
                            {...register(title, validationRules)}
                            value={value}
                            onChange={onChange}
                        />
                        {suggestions.length > 0 && (
                            <ul className="suggestions">
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => onSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </label>
            {errors[title] && <p className="error">{errors[title].message}</p>}
            </>
    )
}

export default InputFields;