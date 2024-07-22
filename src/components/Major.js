import '../Styles/Major.css';
import CollapseCard from './CollapseCard';
import Dropdown from './Dropdown';
import DropdownProvince from './DropdownProvince';
import YearSelect from './YearSelect';
import NameInput from './NameInput';
import { major } from '../InfoFiles/Major/Major';
import React, { useState } from 'react';

const Major = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [name, setName] = useState(null);
    const [filteredEvents, setFilteredEvents] = useState([]);

    const { info } = major;

    // Handlers to update state
    const handleTypeChange = (value) => setSelectedType(value);
    const handleProvinceChange = (value) => setSelectedProvince(value);
    const handleYearChange = (value) => setSelectedYear(value);
    const handleNameChange = (value) => setName(value);

    const onClickSelect = () => {
        let display = info;
        
        if (selectedType) {
            display = display.filter(event => event.type === selectedType);
        }
        if (selectedProvince) {
            display = display.filter(event => event.province === selectedProvince);
        }
        if (selectedYear) {
            display = display.filter(event => event.year === selectedYear);
        }
        if (name) {
            display = display.filter(event => event.name === name);
        }
        
        setFilteredEvents(display);
    };

    const onResetFilters = () => {
        // Reset state values
        setSelectedType(null);
        setSelectedProvince(null);
        setSelectedYear(null);
        setName(null);

        // Display all events
        setFilteredEvents(info);
    };

    return (
        <div>
            <center className='MajorTitle'>
                <h1>Major Disasters</h1>
                <div className='majorContainer'>
                    <center>
                        <div className="minorContainer">
                            <div className='select2'>
                                <Dropdown onChange={handleTypeChange} />
                            </div>
                            <div className='select2'>
                                <DropdownProvince onChange={handleProvinceChange} />
                            </div>
                            <div className='select2'>
                                <YearSelect onYearChange={handleYearChange} />
                            </div>
                        </div>
                    </center>
                    <center>
                        <div className='select2'>
                            <NameInput onChange={handleNameChange} />
                        </div>
                        <div className='select2'>
                            <button className="button" onClick={onClickSelect}>Filter Events</button>
                            <button className="button" onClick={onResetFilters}>Reset Filters</button>
                        </div>
                    </center>
                </div>

                
                
            </center>

            <div className="cardContainer2-major">
                    <div className='cardContainer-major'>
                        {filteredEvents.map((event, index) => (
                            <CollapseCard 
                                key={index}
                                name={event.name}
                                province={event.province}
                                type={event.type}
                                year={event.year}
                                humanCasulties={event.humanCasulties}
                                general={event.general}
                            />
                        ))}
                    </div>
                </div>

            
            
        </div>
    );
};

export default Major;
