import { loadsExperience } from "@/services/loadsData";

export default function SectionExperience() {
    
    const experiences = loadsExperience();

    return(
        <section id="experience">
            <div className="title">
                <h2>Experiência</h2>    
            </div>
            {experiences.list.map(experience =>
                <div className="container">               
                    <img className="pictureExperience" src={experience.src} alt={experience.alt}/>
                    <div className="content">
                        <h3 className="company">{experience.company}</h3>
                        <h4 className="position">{experience.position}</h4>
                        <p className="period">{experience.period}</p>
                        <p className="description">{experience.description}</p>
                    </div>
                </div>
            )}
        </section>
    )
}
