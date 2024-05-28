import Skill from "./Skill"
import styles from "../style/components/SkillGroup.module.scss"

function SkillGroup({ competence }) {
    return (
        <div className={styles.content_skillGroup}>
            <p className={styles.pGroup}>{competence.group}</p>
            {competence.items.map((item, index) => (
                <Skill key={"S" + index} item={item} />
            ))}
        </div>
    )
}

export default SkillGroup