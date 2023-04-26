import React, { useState } from 'react';
import "./Select.css";
function Select() {
    const [selectedOption, setSelectedOption] = useState('');

    function handleChange(event) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>

            <select value={selectedOption} onChange={handleChange}>
                <option value="" disabled selected>Category of your Achievement</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

        </div>
    );
}


export default Select;