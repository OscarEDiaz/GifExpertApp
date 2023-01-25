import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const stringLength = inputValue.trim().length;
        
        if (stringLength <= 1) return;

        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
