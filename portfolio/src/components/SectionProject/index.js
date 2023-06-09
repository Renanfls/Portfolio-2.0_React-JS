'use client'
import Carousel from 'react-bootstrap/Carousel';
import { loadsProjects } from "@/services/loadsData"
import Projects from './components/Project';

function SectionProject() {

    const projects = loadsProjects();

    return (
        <section id='projects'>
            <div className="title d-flex justify-content-center">
                <h2 className="fw-bold">Projetos</h2>    
            </div>
                <div className='d-flex justify-content-center'>
                    <Carousel fade className='my-5 container-fluid w-100'>
                        {projects.list.map(project =>          
                            <Carousel.Item className="container-fluid">  
                                    <Projects className="d-flex justify-content-center" {...project} ></Projects>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
        </section>
    );
}

export default SectionProject;