'use client'
import { loadsExperience } from "@/services/loadsData";
import { Row, Col } from "react-bootstrap";

export default function SectionExperience() {
    
    const experiences = loadsExperience();

    return(
        <section id="experiences" className="my-5">
            <div className="title d-flex justify-content-center">
                <h2 className="fw-bold">Experiência</h2>    
            </div>
            {experiences.list.map(experience =>
                <div className="container d-grid p-md-5 mt-md-5 justify-content-center rounded-5 my-5 my-md-0">  
                    <Row> 
                        <Col sm={12} md={6} xl={4} className="d-grid justify-content-center pt-5 pt-md-0">
                            <img className="pictureExperience" src={experience.src} alt={experience.alt}/>
                        </Col>            
                        <Col sm={12} md={6} xl={8}>
                            <div className="p-5 p-md-0 text-center text-md-start">
                                <h3 className="company fw-bold">{experience.company}</h3>
                                <h4 className="position lh-base">{experience.position}</h4>
                                <p className="period lh-sm mt-2">{experience.period}</p>
                                <p className="description fw-bold lh-base mt-3 text-center text-md-start">{experience.description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </section>
    )
}
