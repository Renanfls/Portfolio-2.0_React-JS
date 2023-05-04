import { useEffect, useState } from "react";
import { loadsExperience } from "../services/loadsData";

function ExperienceCard() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const returns = loadsExperience();
        setList(returns.list);
    }, []);

    return(
        <div>
            {returns
                .map((experience) => {

                })
            }
        </div>
    )
}

export default ExperienceCard