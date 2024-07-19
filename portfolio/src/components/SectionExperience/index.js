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
        <div
          key={experience.company}
          className="container p-md-5 mt-5 rounded-5"
        >
          <Row className="g-5 align-items-center">
            <Col
              sm={12}
              md={12}
              lg={4}
              className="d-flex justify-content-center pt-5 pt-md-0"
            >
              <img
                className="pictureExperience"
                src={experience.src}
                alt={experience.alt}
              />
            </Col>
            <Col sm={12} md={12} lg={8} className="px-4">
              <div className="p-5 p-md-0 text-center text-lg-start">
                <h3 className="company fw-bold">{experience.company}</h3>
                <h4 className="position lh-base">{experience.position2}</h4>
                <p className="period lh-sm mt-2">{experience.period2}</p>
                <p className="description fw-bold lh-base mt-3">
                  {experience.description2}
                </p>
              </div>
              <div className="p-5 p-md-0 text-center text-lg-start">
                <h3 className="company fw-bold">{experience.company}</h3>
                <h4 className="position lh-base">{experience.position1}</h4>
                <p className="period lh-sm mt-2">{experience.period1}</p>
                <p className="description fw-bold lh-base mt-3">
                  {experience.description1}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </section>
  );
}
