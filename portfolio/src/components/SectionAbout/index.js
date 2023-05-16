'use client'
import { loadsAbout, loadsTools } from "@/services/loadsData"
import { Row, Col } from "react-bootstrap";

export default function SectionAbout() {

    const about = loadsAbout();
    const tools = loadsTools();

    return (
        <section id="about" className="">
            <Row>
                <Col sm={12} md={6}>
                    <img id="pictureAbout" src="/images/picture.jpg" alt="foto"/>
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center">
                    <div>
                        <div className="title">
                            <h2>Sobre mim</h2>    
                        </div>
                        <div className="description my-4">
                            <p className="fw-bold">{about.name}</p>
                            <p>{about.ageStatusCity}</p>
                            <div className="d-flex mt-4">
                                {about.formations.map(formation => 
                                    <div className="formations">
                                        <p>{formation.course}</p>
                                        <p className="period">{formation.period}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id="containerTools">
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
