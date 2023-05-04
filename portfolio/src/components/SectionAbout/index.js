import config from "../../../config.json";

export default function SectionAbout() {
    const formations = {...config.formations};
    return (
        <section id="about">
            <div id="pictureAbout">
                <img src="/images/picture.jpg" alt="foto"/>
            </div>
            <div id="content">
                <div className="title">
                    <h2>Sobre mim</h2>    
                </div>
                <div className="description">
                    <p>{config.name}</p>
                    <p>{config.ageStatusCity}</p>
                    <p>{formations.course}</p>
                    <p>{formations.period}</p>
                    <p>Computação Gráfica - Escola Zion de Entretenimento</p> 
                    <p>(Ago 2019 - Ago 2022)</p>
                </div>
                <div id="containerTools">
                    <ul className="tools">
                        <li><img src="/assets/html5.svg" alt="icone html5"/></li>
                        <li><img src="/assets/css3.svg" alt="icone css3"/></li>
                        <li><img src="/assets/sass.svg" alt="icone sass"/></li>
                        <li><img src="/assets/bootstrap.svg" alt="icone bootstrap"/></li>
                        <li><img src="/assets/javascript.svg" alt="icone javascript"/></li>
                        <li><img src="/assets/react.svg" alt="icone react"/></li>
                        <li><img src="/assets/stylecomponents.svg" alt="icone stylecomponents"/></li>
                        <li><img src="/assets/java.svg" alt="icone java"/></li>
                    </ul>
                    <ul className="tools">
                        <li><img src="/assets/mysql.svg" alt="icone mysql"/></li>
                        <li><img src="/assets/vscode.svg" alt="icone vscode"/></li>
                        <li><img src="/assets/androidStudio.svg" alt="icone androidStudio"/></li>
                        <li><img src="/assets/git.svg" alt="icone git"/></li>
                        <li><img src="/assets/github.svg" alt="icone github"/></li>
                        <li><img src="/assets/vite.svg" alt="icone vite"/></li>
                    </ul>
                    <ul className="tools">
                        <li><img src="/assets/illustrator.svg" alt="icone illustrator"/></li>
                        <li><img src="/assets/photoshop.svg" alt="icone photoshop"/></li>
                        <li><img src="/assets/premiere.svg" alt="icone premiere"/></li>
                        <li><img src="/assets/afterEffects.svg" alt="icone afterEffects"/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
