'use client'
import { loadsAbout, loadsTools } from "@/services/loadsData"
import { Row, Col } from "react-bootstrap";

export default function SectionAbout() {

    const about = loadsAbout();
    const tools = loadsTools();

    return (
        <section id="about" className="align-items-center d-flex justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} className="d-flex justify-content-center">
                    <img id="pictureAbout" src="/images/picture.jpg" alt="foto"/>
                </Col>
                <Col sm={12} md={6} className="align-items-center d-flex">
                    <div>
                        <div className="title d-flex justify-content-center">
                            <h2 className="fw-bold">Sobre mim</h2>    
                        </div>
                        <div className="description my-4">
                            <div className="d-flex justify-content-center gap-4">
                                <p className="fw-bold">{about.name}</p>
                                <p>{about.ageStatusCity}</p>
                            </div>                            
                            <div className="d-flex mt-4">
                                {about.formations.map(formation => 
                                    <div className="formations me-2 p-3 rounded-5">
                                        <p>{formation.course}</p>
                                        <p className="period">{formation.period}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="containerTools align-items-center d-flex flex-column">
                            <ul className="tools">
                                {tools.line1.map(tool =>
                                    <li><img src={tool.src} alt={tool.alt}/></li>
                                )}
                            </ul>
                            <ul className="tools">
                                {tools.line2.map(tool =>
                                    <li><img src={tool.src} alt={tool.alt}/></li>
                                )}
                            </ul>
                            <ul className="tools">
                                {tools.line3.map(tool => 
                                    <li><img src={tool.src} alt={tool.alt}/></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}
