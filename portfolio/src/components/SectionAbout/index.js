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
            className="w-75"
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
            <div className="description gap-5 my-4">
              <Row className="d-flex align-items-center justify-content-center gap-2">
                <p className="fw-bold">{about.name}</p>
                <p>{about.ageStatusCity}</p>
              </Row>
              <div className="containerTools align-items-center d-flex flex-column mt-3">
                <ul className="tools">
                  {tools.line1.map((tool) => (
                    <li key={tool.alt}>
                      <img
                        src={tool.src}
                        alt={tool.alt}
                        title={tool.title}
                        className="w-100"
                      />
                    </li>
                  ))}
                </ul>
                <ul className="tools">
                  {tools.line2.map((tool) => (
                    <li key={tool.alt}>
                      <img
                        src={tool.src}
                        alt={tool.alt}
                        title={tool.title}
                        className="w-75"
                      />
                    </li>
                  ))}
                </ul>
                <ul className="tools">
                  {tools.line3.map((tool) => (
                    <li key={tool.alt}>
                      <img
                        src={tool.src}
                        alt={tool.alt}
                        title={tool.title}
                        className="w-75"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <Row className="d-flex justify-content-center gap-3 mt-5">
                {about.formations.map((formation) => (
                  <Col
                    key={formation.course}
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
          </div>
        </Col>
      </Row>
    </section>
  );
}
