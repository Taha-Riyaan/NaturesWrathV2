import React, { useState } from 'react';
import '../Styles/YearSelect.css'; // Import the CSS file

const YearSelect = ({ onYearChange }) => {
    const [selectedYear, setSelectedYear] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedYear(newValue);
        if (onYearChange) {
            onYearChange(newValue); // Notify parent component of the new year
        }
    };

    const handleDropdownChange = (event) => {
        const newValue = event.target.value;
        setSelectedYear(newValue);
        if (onYearChange) {
            onYearChange(newValue); // Notify parent component of the new year
        }
        setIsDropdownOpen(false);
    };

    const handleFocus = () => {
        setIsDropdownOpen(true);
    };

    const handleBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 100); // Delay to allow click
    };

    const generateYears = (start, end) => {
        const years = [];
        for (let year = start; year >= end; year--) {
            years.push(year.toString());
        }
        return years;
    };

    const years = generateYears(2024, 1500);

    return (
        <div className="year-select-container">
            <input
                type="text"
                id="year-input"
                className="year-select-input"
                value={selectedYear}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Type or select a year"
            />
            <select
                className={`year-select-dropdown ${isDropdownOpen ? 'open' : ''}`}
                size={10}
                value={selectedYear}
                onChange={handleDropdownChange}
                onBlur={handleBlur}
            >
                <option value="">Select a year</option>
                {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    );
};

export default YearSelect;
