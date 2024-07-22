import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css';
import wildfire from "../Images/wildfire.png";
import flood from "../Images/flood.png";
import tornado from "../Images/tornado.png";

const Carousel = ({ lang }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define slides with conditional translations
    const slides = [
        {
            image: wildfire,
            title: lang ? 'Fort McMurray Wildfires, Alberta 2016' : 'Feux de forêt de Fort McMurray, Alberta 2016',
            text: lang
                ? "On May 1, 2016, a wildfire began southwest of Fort McMurray, Alberta, Canada. On May 3, it swept through the community, forcing the largest wildfire evacuation in Alberta's history, with upwards of 88,000 people forced from their homes. Firefighters were assisted by personnel from both the Canadian Armed Forces and Royal Canadian Mounted Police, as well as other Canadian provincial agencies, to fight the wildfire."
                : "Le 1er mai 2016, un incendie de forêt a commencé au sud-ouest de Fort McMurray, Alberta, Canada. Le 3 mai, il a balayé la communauté, entraînant la plus grande évacuation en cas d'incendie de forêt de l'histoire de l'Alberta, avec jusqu'à 88 000 personnes contraintes de quitter leur domicile. Les pompiers ont été assistés par du personnel des Forces armées canadiennes et de la Gendarmerie royale du Canada, ainsi que d'autres agences provinciales canadiennes, pour lutter contre l'incendie."
        },
        {
            image: flood,
            title: lang ? 'Southern Alberta Floods, Alberta 2013' : 'Inondations du sud de l\'Alberta, Alberta 2013',
            text: lang
                ? "In the days leading up to June 19, 2013, parts of southern and central Alberta, Canada experienced heavy rainfall that triggered catastrophic flooding described by the provincial government as the worst in Alberta's history. Areas along the Bow, Elbow, Highwood, Red Deer, Sheep, Little Bow, and South Saskatchewan rivers and their tributaries were particularly affected. A total of 32 states of local emergency were declared and 28 emergency operations centres were activated as water levels rose and numerous communities were placed under evacuation orders."
                : "Dans les jours précédant le 19 juin 2013, certaines parties du sud et du centre de l'Alberta, Canada, ont connu de fortes pluies qui ont déclenché des inondations catastrophiques décrites par le gouvernement provincial comme les pires de l'histoire de l'Alberta. Les zones le long des rivières Bow, Elbow, Highwood, Red Deer, Sheep, Little Bow et South Saskatchewan ainsi que leurs affluents ont été particulièrement touchées. Un total de 32 états d'urgence locaux ont été déclarés et 28 centres d'opérations d'urgence ont été activés alors que les niveaux d'eau montaient et que de nombreuses communautés étaient placées sous ordre d'évacuation."
        },
        {
            image: tornado,
            title: lang ? 'Regina Cyclone, Saskatchewan 1912' : 'Cyclone de Regina, Saskatchewan 1912',
            text: lang
                ? 'The Regina Cyclone, or Regina tornado of 1912, was a tornado that devastated the city of Regina, Saskatchewan, Canada, on Sunday, June 30, 1912. It remains the deadliest tornado in Canadian history with a total of 28 fatalities and about 300 people injured. At about 4:50 p.m., green funnel clouds formed and touched down south of the city, tearing through the residential area between Wascana Lake and Victoria Avenue, and continuing through the downtown business district, rail yards, warehouse district, and northern residential area.'
                : "Le cyclone de Regina, ou tornade de Regina de 1912, était une tornade qui a dévasté la ville de Regina, Saskatchewan, Canada, le dimanche 30 juin 1912. C'est la tornade la plus meurtrière de l'histoire du Canada avec un total de 28 décès et environ 300 personnes blessées. Vers 16h50, des nuages en entonnoir verts se sont formés et ont touché le sol au sud de la ville, déchirant la zone résidentielle entre le lac Wascana et l'avenue Victoria, puis traversant le centre des affaires, les voies ferrées, le quartier des entrepôts et le quartier résidentiel nord."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); 

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-slide">
                <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
                <h2>{slides[currentIndex].title}</h2>
                <p>{slides[currentIndex].text}</p>
            </div>
            <div className="carousel-controls">
                <button className="carousel-control prev" onClick={prevSlide}>❮</button>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setSlide(index)}
                        ></span>
                    ))}
                </div>
                <button className="carousel-control next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Carousel;
