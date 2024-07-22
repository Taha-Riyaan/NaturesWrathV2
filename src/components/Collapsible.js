import "../Styles/Collapsible.css";
import React, { useState } from "react";
import plus from "../Images/plus.png";
import minus from "../Images/minus.png";
import Quiz from './Quiz';

import { avalanche} from '../InfoFiles/Types/Avalanche'
import { earthquake } from '../InfoFiles/Types/Earthquake'
import { flood } from '../InfoFiles/Types/Flood'
import { hurricane } from '../InfoFiles/Types/Hurricane'
import { tornado } from '../InfoFiles/Types/tornado'
import { tsunami } from '../InfoFiles/Types/Tsunami'
import { wildfire } from '../InfoFiles/Types/Wildfire'




const Collapsible =(child)=>{
    let infoo;

    switch (child.title) {
        case 'avalanche': 
            infoo = avalanche 
            break;
        case 'earthquake': 
            infoo = earthquake
            break;
        case 'flood': 
            infoo = flood
            break;
        case 'hurricane': 
            infoo = hurricane
            break;
        case 'tornado': 
            infoo = tornado
            break;
        case 'tsunami': 
            infoo = tsunami
            break;
        case 'wildfire': 
            infoo = wildfire
            break;
    }

    const { info } = infoo
    const { general, areasOfOccurance, safetyMeasures } = info[0]


    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };
    
    return(
        <div>
            
            <hr className="colDivider-hr2"/>

            <div className="btn1" >
                <div className="spacebtw" onClick={toggle}>
                    <h2>{child.title0}</h2>
                    {open ? <img src={minus} alt="+" className="icon" /> : <img src={plus} alt="+" className="icon" />}
                </div>
                
                
                {open && (
                
                <div className="toggle">
                    <center>
                        <hr className="colDivider-hr"/>
                        
                    </center>


                    {child.check ? (
                        //not in use atm
                        <div>
                            
                            <h4>{child.para}</h4>
                            <h2>{child.title2}</h2>
                            <h4>{child.para2}</h4>
                            <h2>{child.title3}</h2>
                            <h4>{child.para3}</h4>
                        </div>
                    ) : (
                        //in use atm
                        <div>
                            <h4>{general}</h4>
                            <h2>Areas of Occurance</h2>
                            <h4>{areasOfOccurance}</h4>
                            <h2>Safety Measures</h2>
                            <h4>{safetyMeasures}</h4>
                            

                            <div className="quizContainer">
                                <Quiz 
                                    title={child.title} 
                                    title0={child.title0}
                                /> 
                            </div>

                            
                            
                        </div>
                    )}
                    

            </div>
            )}
        </div>
        </div>

        
    )
}
export default Collapsible;


/*
<h2>Severity</h2>
<h4>short explanation</h4>
{image of scale } 
<h2>Recommended Shelter</h2>
<h4>short explanation</h4>
<h2>Preparation</h2>
<h4>short explanation</h4>
<h2>Areas of Occurance</h2>
<h4>provinces in which these happen</h4>
<h2>Government of Canada Weblink?</h2>
*/