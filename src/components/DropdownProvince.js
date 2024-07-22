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
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
            </select>
        </div>
    );
};

export default Dropdown;
