import React, { useState } from 'react';
import '../Styles/NameInput.css'; // Import the CSS file for styling

const NameInput = ({ onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue); // Notify parent component of the new value
        }
    };

    return (
        <div className="name-input-container">
            <input
                type="text"
                className="name-input"
                value={value}
                onChange={handleChange}
                placeholder="Name"
            />
        </div>
    );
};

export default NameInput;
