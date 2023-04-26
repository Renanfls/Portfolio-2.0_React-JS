function SectionAbout() {
    return (
        <section id="about">
            <div id="pictureAbout">
                <img src="../../public/imgs/picture.jpg" alt="foto" />
            </div>
            <div id="content">
                <div className="title">
                    <h2>Sobre mim</h2>    
                </div>
                <div className="description">
                    <p>Renan Fabricio Lima da Silva</p>
                    <p>22 anos - Solteiro - Rio de Janeiro</p>
                    <p>Gestão da Tecnologia da Informação - Estácio de Sá</p>
                    <p>(Fev 2020 - Jul 2022)</p>
                    <p>Computação Gráfica - Escola Zion de Entretenimento</p> 
                    <p>(Ago 2019 - Ago 2022)</p>
                </div>
                <div id="containerTools">
                    <ul className="tools">
                        <li><img src="../../public/assets/html5.svg" alt="icone html5"/></li>
                        <li><img src="../../public/assets/css3.svg" alt="icone css3"/></li>
                        <li><img src="../../public/assets/sass.svg" alt="icone sass"/></li>
                        <li><img src="../../public/assets/bootstrap.svg" alt="icone bootstrap"/></li>
                        <li><img src="../../public/assets/javascript.svg" alt="icone javascript"/></li>
                        <li><img src="../../public/assets/react.svg" alt="icone react"/></li>
                        <li><img src="../../public/assets/stylecomponents.svg" alt="icone stylecomponents"/></li>
                        <li><img src="../../public/assets/java.svg" alt="icone java"/></li>
                    </ul>
                    <ul className="tools">
                        <li><img src="../../public/assets/mysql.svg" alt="icone mysql"/></li>
                        <li><img src="../../public/assets/vscode.svg" alt="icone vscode"/></li>
                        <li><img src="../../public/assets/androidStudio.svg" alt="icone androidStudio"/></li>
                        <li><img src="../../public/assets/git.svg" alt="icone git"/></li>
                        <li><img src="../../public/assets/github.svg" alt="icone github"/></li>
                        <li><img src="../../public/assets/vite.svg" alt="icone vite"/></li>
                    </ul>
                    <ul className="tools">
                        <li><img src="../../public/assets/figma.svg" alt="icone figma"/></li>
                        <li><img src="../../public/assets/illustrator.svg" alt="icone illustrator"/></li>
                        <li><img src="../../public/assets/photoshop.svg" alt="icone photoshop"/></li>
                        <li><img src="../../public/assets/premiere.svg" alt="icone premiere"/></li>
                        <li><img src="../../public/assets/afterEffects.svg" alt="icone afterEffects"/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout