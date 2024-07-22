import React, { useState } from 'react';
import '../Styles/Dropdown.css';

const Dropdown = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (onChange) {
            onChange(value); // Notify parent component
        }
    };

    return (
        <div className='dropdown'>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                <option value="avalanche">Avalanche</option>
                <option value="earthquake">Earthquake</option>
                <option value="flood">Flood</option>
                <option value="hurricane">Hurricane</option>
                <option value="tornado">Tornado</option>
                <option value="tsunami">Tsunami</option>
                <option value="wildfire">Wildfire</option>
            </select>
        </div>
    );
};

export default Dropdown;
