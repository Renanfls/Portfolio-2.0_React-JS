import { loadsAbout, loadsTools } from "@/services/loadsData"

export default function SectionAbout() {

    const about = loadsAbout();
    const tools = loadsTools();

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
                    <p>{about.name}</p>
                    <p>{about.ageStatusCity}</p>
                    {about.formations.map(formation => 
                        <>
                            <p>{formation.course}</p>
                            <p>{formation.period}</p>
                        </>
                    )}
                </div>
                <div id="containerTools">
                    <ul className="tools">
                        {tools.line1.map(tool =>
                            <li><img src={tool.src} alt={tool.alt}/></li>
                        )}
                    </ul>
                    <ul className="tools">
                        {tools.line2.map(tool =>
                            <li><img src={tool.src} alt={tool.alt}/></li>
                        )}
                    </ul>
                    <ul className="tools">
                        {tools.line3.map(tool => 
                            <li><img src={tool.src} alt={tool.alt}/></li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}
