"use client";
import { loadsExperience } from "@/services/loadsData";
import { Col, Row } from "react-bootstrap";

export default function SectionExperience() {
  const experiences = loadsExperience();

  return (
    <section id="experiences" className="my-5">
      <div className="title d-flex justify-content-center">
        <h2 className="fw-bold">Experiência</h2>
      </div>
      {experiences.list.map((experience) => (
        <div className="container d-flex p-md-5 mt-5 justify-content-center rounded-5">
          <Row className="g-5 justify-content-center">
            <Col
              sm={12}
              md={12}
              lg={4}
              className="d-grid justify-content-center pt-5 pt-md-0"
            >
              <img
                className="pictureExperience"
                src={experience.src}
                alt={experience.alt}
              />
            </Col>
            <Col sm={12} md={12} lg={8} className="pe-2 ps-4">
              <div className="p-5 p-md-0 text-center text-lg-start">
                <h3 className="company fw-bold">{experience.company}</h3>
                <h4 className="position lh-base">{experience.position}</h4>
                <p className="period lh-sm mt-2">{experience.period}</p>
                <p className="description fw-bold lh-base mt-3">
                  {experience.description}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </section>
  );
}
