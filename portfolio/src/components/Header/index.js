'use client'
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap"

function Header() {
    return (
        <header>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="d-flex justify-content-between me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="d-flex flex-row justify-start">
                            <Nav.Link href="#about" className="link">Sobre</Nav.Link>
                            <Nav.Link href="#experience" className="link">Experiência</Nav.Link>
                            <Nav.Link href="#" className="link">Projetos</Nav.Link>
                            <Nav.Link href="#" className="link">Contato</Nav.Link>
                        </div>
                        <Button variant="outline-success resumeButton" href="file:///C:/Users/renan/Downloads/Profile.pdf">Resumo</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





{/*             {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                <Navbar className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-between flex-grow-1 py-5">
                                    <div className="d-flex flex-row justify-start">
                                        <Nav.Link href="#about" className="link">Sobre</Nav.Link>
                                        <Nav.Link href="#experience" className="link">Experiência</Nav.Link>
                                        <Nav.Link href="#" className="link">Projetos</Nav.Link>
                                        <Nav.Link href="#" className="link">Contato</Nav.Link>
                                    </div>
                                    <Button variant="outline-success resumeButton" href="file:///C:/Users/renan/Downloads/Profile.pdf">Resumo</Button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))} */}
        </header>

    )
}

export default Header