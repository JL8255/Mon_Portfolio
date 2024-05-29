import Skill from "./Skill"
import styles from "../style/components/SkillGroup.module.scss"

function SkillGroup({ competence }) {
    return (
        <div className={styles.content_skillGroup}>
            <div className={styles.pGroup}>
                <i className="fa-solid fa-tags"></i>
                <p>{competence.group}</p>
            </div>
            {competence.items.map((item, index) => (
                <Skill key={"S" + index} item={item} />
            ))}
        </div>
    )
}

export default SkillGroup