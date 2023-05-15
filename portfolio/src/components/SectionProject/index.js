'use client'
import Carousel from 'react-bootstrap/Carousel';
import { loadsExperience } from "@/services/loadsData";

function SectionProject() {

    const experiences = loadsExperience();

    return (
        <Carousel fade>
            {experiences.list.map(experience =>
                <Carousel.Item className="container">            
                    <img className="pictureExperience" src={experience.src} alt={experience.alt}/>
                    <div className="content">
                        <h3 className="company">{experience.company}</h3>
                        <h4 className="position">{experience.position}</h4>
                        <p className="period">{experience.period}</p>
                        <p className="description">{experience.description}</p>
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default SectionProject;