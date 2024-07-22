import React, { useState } from 'react';
import Carousel from './Carousel';
import Timeline from './Timeline';
import Divider from './Divider';
import InfoBody from './InfoBody';
import "../Styles/Home.css"

const Home = () => {
    const [lang, setLang] = useState(true);
    const [language, setLanguage] = useState("Selected Language: English");

    const changeLanguage = () => {
        const newLang = !lang;
        setLang(newLang);

        if (newLang) {
            setLanguage("Selected Language: English");
        } else {
            setLanguage("Langue sélectionnée: Français");
        }
    };

    
    

    
    return ( 
        <div className="App">
        
        <div className="content">
            <button className="home-button" onClick={changeLanguage}>{language}</button>
            <Carousel lang={lang}/>
            <Divider/>
            <InfoBody lang={lang}/>
            <Divider/>
            <Timeline lang={lang}/>
        </div>
        </div>
        
    );
}
 
export default Home;