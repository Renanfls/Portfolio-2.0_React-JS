'use client'
import { Button, Nav, Navbar } from "react-bootstrap"

function Header() {
    return (
        <header className="fixed-top px-5 w-100">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-3 d-flex align-items-sm-center">
                        <Nav.Link href="#about" className="link">Sobre</Nav.Link>
                        <Nav.Link href="#experiences" className="link">Experiência</Nav.Link>
                        <Nav.Link href="#projects" className="link">Projetos</Nav.Link>
                        <Nav.Link href="#contact" className="link">Contato</Nav.Link>
                    </Nav>
                    <Button className="resumeButton ms-0 d-flex justify-content-center" title="Acessar Currículo" target="_blank" href="https://drive.google.com/file/d/1UWsfLj99AGzo8Pgg7D1AJv2-V3lp7mXd/view?usp=sharing">Resumo</Button>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header