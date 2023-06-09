import styled from "styled-components";

const StyledProject = styled.div`
    background-image: url(${({src}) => src});
`

function Projects({ background, period, title, stacks, linkGithub, linkAplication }) {

    return (
        <StyledProject src={background} className="container-project rounded-5 px-sm-5 align-items-center d-flex flex-column justify-content-center text-center">
            <small className="period-project fs-6" style={{maxWidth: "15ch"}}>{period}</small>
            <h5 className="title-project h1 fw-bold fs-2" style={{maxWidth: "15ch"}}>{title}</h5>
            <div className="tools-project">
                {stacks.map(stack =>
                    <img className="pe-2" src={stack.src} />
                )}
            </div>
            <div className="links-project">
                <a href={linkGithub} target="_blank" class="link me-3" title="Link Repositorio">
                    <svg width="30" height="32" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Link Repositorio">
                        <path d="M14.9805 34.2926C5.70872 36.9796 5.70872 29.8142 2 28.9185M27.961 39.6667V32.7341C28.0306 31.8799 27.9111 31.0212 27.6106 30.2151C27.31 29.4089 26.8353 28.6738 26.2179 28.0586C32.0406 27.4317 38.16 25.2999 38.16 15.5191C38.1595 13.018 37.1636 10.6129 35.3785 8.80144C36.2238 6.6133 36.164 4.19468 35.2116 2.048C35.2116 2.048 33.0234 1.42102 27.961 4.69922C23.7109 3.58646 19.2307 3.58646 14.9805 4.69922C9.91811 1.42102 7.72997 2.048 7.72997 2.048C6.77753 4.19468 6.71776 6.6133 7.56308 8.80144C5.76459 10.6263 4.76767 13.0532 4.78154 15.5728C4.78154 25.282 10.9009 27.4137 16.7236 28.1124C16.1135 28.7214 15.643 29.4477 15.3427 30.2439C15.0424 31.0402 14.919 31.8887 14.9805 32.7341V39.6667" stroke="#AEAEAE" stroke-width="3.01333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href={linkAplication} target="_blank" class="link" title="Link Projeto">
                    <svg width="31" height="30" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Link Projeto">
                        <path d="M32.1813 22.0891V34.1424C32.1813 35.208 31.758 36.2299 31.0046 36.9834C30.2511 37.7369 29.2291 38.1602 28.1636 38.1602H6.06578C5.0002 38.1602 3.97826 37.7369 3.22478 36.9834C2.4713 36.2299 2.048 35.208 2.048 34.1424V12.0446C2.048 10.9791 2.4713 9.95712 3.22478 9.20364C3.97826 8.45016 5.0002 8.02686 6.06578 8.02686H18.1191" stroke="#AEAEAE" stroke-width="3.616" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.1547 2H38.208V14.0533" stroke="#AEAEAE" stroke-width="3.616" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.1103 24.0978L38.208 2" stroke="#AEAEAE" stroke-width="3.616" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </StyledProject>
    );
}

export default Projects;