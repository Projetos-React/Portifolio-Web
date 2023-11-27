import { lst_skills } from "../ultils/ultis"
import CardSkill from "./CardSkill"

export default function MySkills() {
    return (
        <section id="MySkills" className="skillsContainer">
            <h1 className="skillstitle">Skills</h1>
            <div className="skillsType">
                {lst_skills.map((skill) => {
                    return <CardSkill title={skill.title} src={skill.src} />
                })}
            </div>
        </section>
    )
}