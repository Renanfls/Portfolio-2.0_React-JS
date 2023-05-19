'use client'
import { Button, Nav, Navbar } from "react-bootstrap"

function Header() {
    return (
        <header className="fixed-top">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" className="link">Sobre</Nav.Link>
                        <Nav.Link href="#experience" className="link">Experiência</Nav.Link>
                        <Nav.Link href="#" className="link">Projetos</Nav.Link>
                        <Nav.Link href="#" className="link">Contato</Nav.Link>
                    </Nav>
                    <Button className="resumeButton" href="file:///C:/Users/renan/Downloads/Profile.pdf">Resumo</Button>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header