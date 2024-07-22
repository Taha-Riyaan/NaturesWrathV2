import "../Styles/InfoBody.css"

const InfoBody = ({ lang }) => {
    return ( 
        <center>
            <div className="info-container">
                <h3>
                    {lang 
                        ? "Canada borders on three oceans, stretches across six time zones, encompasses mountains, plains, forests and tundra. It hosts weather patterns that range from Arctic to moderate, from seemingly endless rains to drought, from numbing cold to heat waves. With all those landforms and weather types, the possibilities of severe weather and geological events are a constant reality. <br /> <br /> Some of the most destructive hazards are in the form of natural disasters such as Avalanches, Earthquakes, Floods, Hurricanes, Tornados, Tsunamis, and Wildfires."
                        : "Le Canada borde trois océans, s'étend sur six fuseaux horaires, comprend des montagnes, des plaines, des forêts et de la toundra. Il accueille des types de climat allant de l'Arctique au modéré, des pluies apparemment infinies à la sécheresse, du froid glacial aux vagues de chaleur. Avec tous ces types de terrain et de climat, les possibilités de conditions météorologiques sévères et d'événements géologiques sont une réalité constante. <br /> <br /> Certains des dangers les plus destructeurs sont sous forme de catastrophes naturelles telles que les Avalanches, les Tremblements de terre, les Inondations, les Ouragans, les Tornados, les Tsunamis et les Incendies de forêt."
                    }
                </h3>
            </div>
        </center>
    );
}

export default InfoBody;
