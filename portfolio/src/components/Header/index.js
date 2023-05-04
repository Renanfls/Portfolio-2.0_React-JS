function Header() {
    return (
        <header>
            <nav className="menu">
                <ul>
                    <li><a href="#about" className="link">Sobre</a></li>
                    <li><a href="#" className="link">Experiência</a></li>
                    <li><a href="#" className="link">Projetos</a></li>
                    <li><a href="#" className="link">Contato</a></li>
                </ul>
            </nav>
            <button className="resumeButton">
                <a href="file:///C:/Users/renan/Downloads/Profile.pdf">Resumo</a>
            </button>
        </header>
    )
}

export default Header