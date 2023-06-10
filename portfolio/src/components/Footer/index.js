'use client'
import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer id="contact" className="bar d-flex justify-content-center">
            <Row className="row-cols-1 row-cols-md-2  align-items-center justify-content-center m-5 w-75">
                <Col className="p-0 mb-2">
                    <a href="https://www.linkedin.com/in/renan-fabricio/" target="_blank" class="d-flex align-items-center justify-content-center p-0">
                        <img src="/assets/linkedin.svg" className="me-3"></img>
                        <p className="mb-0">linkedin.com/in/renan-fabricio</p>
                    </a>
                </Col>
                <Col className="p-0 mb-2">
                    <a href="mailto:contato.renanfabricio@gmail.com" class="d-flex align-items-center justify-content-center">
                        <img src="/assets/email.svg" className="me-3"></img>
                        <p className="mb-0">contato.renanfabricio@gmail.com</p>
                    </a>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;