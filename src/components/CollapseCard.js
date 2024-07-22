import React, { useState } from "react";
import "../Styles/CollapseCard.css";
import temp from "../Images/temp.jpg"
import { major } from '../InfoFiles/Major/Major'

const CollapseCard = ({ name, province, type, year, humanCasulties, general }) => {
    
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    };

    return (

        

        <div className="Major-card" onClick={handleCardClick}>
            
            <div className="Major-card-title">
                <h2>{name} | {year}</h2>
            </div>
            {expanded && (
                <>
                <hr />
                <img src= {temp} alt="Card" className="Major-card-image" />
                <div className="Major-card-extra">
                    <p>Province: {province} <br /> Human Casulties: {humanCasulties}</p>
                    <p>{general}</p>
                </div>
                </>
            )}
        </div>
    );
};

export default CollapseCard;