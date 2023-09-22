"use client";
import { loadsAbout, loadsTools } from "@/services/loadsData";
import { Col, Row } from "react-bootstrap";

export default function SectionAbout() {
  const about = loadsAbout();
  const tools = loadsTools();

  return (
    <section id="about" className=" w-100">
      <Row className="d-flex justify-content-center">
        <Col
          sm={12}
          md={8}
          xl={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            id="pictureAbout"
            className="h-100 w-75"
            src="/images/picture.jpg"
            alt="foto"
          />
        </Col>
        <Col
          sm={12}
          md={8}
          xl={6}
          className="align-items-center justify-content-center my-5 my-xl-0 d-flex"
        >
          <div>
            <div className="title d-flex justify-content-center">
              <h2 className="fw-bold">Sobre mim</h2>
            </div>
            <div className="description my-4">
              <Row className="d-flex align-items-center justify-content-center gap-4">
                <p className="fw-bold">{about.name}</p>
                <p>{about.ageStatusCity}</p>
              </Row>
              <Row className="d-flex justify-content-center m-4 gap-3">
                {about.formations.map((formation) => (
                  <Col
                    sm={12}
                    md={5}
                    className="formations mb-3 mb-md-0 p-3 rounded-5"
                  >
                    <p>{formation.course}</p>
                    <p className="period">{formation.period}</p>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="containerTools align-items-center d-flex flex-column">
              <ul className="tools">
                {tools.line1.map((tool) => (
                  <li>
                    <img src={tool.src} alt={tool.alt} className="w-100" />
                  </li>
                ))}
              </ul>
              <ul className="tools">
                {tools.line2.map((tool) => (
                  <li>
                    <img src={tool.src} alt={tool.alt} className="w-75" />
                  </li>
                ))}
              </ul>
              <ul className="tools">
                {tools.line3.map((tool) => (
                  <li>
                    <img src={tool.src} alt={tool.alt} className="w-75" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
