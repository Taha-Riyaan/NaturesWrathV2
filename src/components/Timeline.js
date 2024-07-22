import React from 'react';
import '../Styles/Timeline.css';
import TimelineLeft from './TimelineLeft';
import TimelineRight from './TimelineRight';

const Timeline = ({ lang }) => {

    return (
        <center>
            <h1 className="timelineTitle">
                {lang 
                    ? "Timeline of Major Events"
                    : "Chronologie des Événements Majeurs"
                }
            </h1>

            <div className="timelineContainer">
                <TimelineLeft 
                    title={lang ? "Fort McMurray Wildfires, Alberta | 2016" : "Feux de forêt de Fort McMurray, Alberta | 2016"} 
                    para={lang 
                        ? "By far the costliest natural disaster in Canadian history was the wildfire that razed 590,000 hectares around Fort McMurray in the summer of 2016, incurring $9.9 billion in damages. Temperatures of 33 degrees Celsius combined with desert-dry brush created the perfect conditions for the blaze."
                        : "De loin la catastrophe naturelle la plus coûteuse de l'histoire du Canada est le feu de forêt qui a dévasté 590 000 hectares autour de Fort McMurray à l'été 2016, entraînant des dommages de 9,9 milliards de dollars. Des températures de 33 degrés Celsius combinées à des broussailles désertiques ont créé les conditions idéales pour le brasier."
                    }
                />
                <TimelineRight
                    title={lang ? "Southern Alberta Floods, Alberta | 2013" : "Inondations du sud de l'Alberta, Alberta | 2013"} 
                    para={lang 
                        ? "The Alberta floods were the worst floods in Alberta's history. The floods caused as much as $6 billion dollars in different damages. These floods and water have caused many damages."
                        : "Les inondations en Alberta ont été les pires inondations de l'histoire de l'Alberta. Les inondations ont causé jusqu'à 6 milliards de dollars de dommages divers. Ces inondations et les eaux ont causé de nombreux dommages."
                    }
                />
                <TimelineLeft 
                    title={lang ? "Regina Cyclone, Saskatchewan | 1912" : "Cyclone de Regina, Saskatchewan | 1912"} 
                    para={lang 
                        ? "Sometimes referred to as Canada's deadliest tornado, the tornado tore through Regina, with 400km/hour winds. It killed 28 people, and left 2500 people without homes, flattening many houses, and most of the business district."
                        : "Parfois appelé la tornade la plus meurtrière du Canada, la tornade a traversé Regina, avec des vents de 400 km/h. Elle a tué 28 personnes et laissé 2500 personnes sans abri, a aplati de nombreuses maisons et la plupart du quartier d'affaires."
                    }
                />
                <TimelineRight
                    title={lang ? "Rogers Pass Avalanche, British Columbia | 1910" : "Avalanche du Rogers Pass, Colombie-Britannique | 1910"} 
                    para={lang 
                        ? "The TransCanada Railway ran through the Rogers Pass where the snow piles up on the rails often and one night the train came by, and the snow came down onto the track and derailed the locomotive killing 62 men."
                        : "Le chemin de fer TransCanada passait par le Rogers Pass où la neige s'accumule souvent sur les rails et une nuit, le train est passé et la neige est tombée sur les rails, déraillant la locomotive et tuant 62 hommes."
                    }
                />
                <TimelineLeft 
                    title={lang ? "Hurricane, Nova Scotia | 1873" : "Ouragan, Nouvelle-Écosse | 1873"} 
                    para={lang 
                        ? "'The Lord's Day Gale' was a very deadly storm, despite having relatively low wind speeds only be a Category 2 hurricane. It destroyed 1200 boats and 900 buildings in Nova Scotia and killed at least 233 people. This deadly Hurricane will be remembered for a long time."
                        : "'La tempête du jour du Seigneur' était une tempête très meurtrière, malgré des vitesses de vent relativement faibles, étant seulement un ouragan de catégorie 2. Elle a détruit 1200 bateaux et 900 bâtiments en Nouvelle-Écosse et a tué au moins 233 personnes. Cet ouragan meurtrier sera longtemps mémorisé."
                    }
                />
                <TimelineRight
                    title={lang ? "Hurricane, Newfoundland | 1775" : "Ouragan, Terre-Neuve | 1775"} 
                    para={lang 
                        ? "The Great Newfoundland Hurricane caused approximately 4000 deaths in total, and most of the lives that were lost were English and Irish sailors on the eastern and western coast of Newfoundland. On September 9, a second tempest wrecked as many as 700 boats, including two Royal Navy Schooners."
                        : "Le grand ouragan de Terre-Neuve a causé environ 4000 décès au total, et la plupart des vies perdues étaient celles de marins anglais et irlandais sur la côte est et ouest de Terre-Neuve. Le 9 septembre, une deuxième tempête a détruit jusqu'à 700 bateaux, y compris deux goélettes de la Royal Navy."
                    }
                />
                <TimelineLeft 
                    title={lang ? "Cascadia Earthquake, British Columbia | 1700" : "Tremblement de terre de Cascadia, Colombie-Britannique | 1700"} 
                    para={lang 
                        ? "The Cascadia earthquake occurred along the Cascadia subduction zone in late January of 1700, with an estimated magnitude of 8.7 to 9.2, causing where 4400 to 10400 casualties. This was so devastating to so many."
                        : "Le tremblement de terre de Cascadia a eu lieu le long de la zone de subduction de Cascadia fin janvier 1700, avec une magnitude estimée de 8,7 à 9,2, causant entre 4400 et 10400 victimes. Cela a été si dévastateur pour tant de personnes."
                    }
                />
                
            </div>
        </center>
    );
};

export default Timeline;
