'use client'
import { loadsExperience } from "@/services/loadsData";
import { Row, Col } from "react-bootstrap";

export default function SectionExperience() {
    
    const experiences = loadsExperience();

    return(
        <section id="experience">
            <div className="title">
                <h2>Experiência</h2>    
            </div>
            {experiences.list.map(experience =>
                <div className="container d-grid p-5 mt-5 w-75 justify-content-center">  
                    <Row> 
                        <Col sm={12} md={6} xl={4} className="d-grid justify-content-center">
                            <img className="pictureExperience" src={experience.src} alt={experience.alt}/>
                        </Col>            
                        <Col sm={12} md={6} xl={8}>
                            <div>
                                <h3 className="company">{experience.company}</h3>
                                <h4 className="position">{experience.position}</h4>
                                <p className="period">{experience.period}</p>
                                <p className="description">{experience.description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </section>
    )
}
