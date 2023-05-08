import { loadsExperience } from "@/services/loadsData";

export default function SectionExperience() {
    
    const experiences = loadsExperience();

    return(
        <section id="experience">
            <div className="title">
                <h2>Experiência</h2>    
            </div>
            <div>
                {experiences.list.map(experience =>
                    <>
                        <div>
                            <img src={experience.src} alt={experience.alt}/>
                        </div>
                        <div>
                            <h3>{experience.company}</h3>
                            <h4>{experience.position}</h4>
                            <p>{experience.period}</p>
                            <p>{experience.description}</p>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
