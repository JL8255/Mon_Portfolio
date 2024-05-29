import styles from "../style/components/Skill.module.scss"

function Skill({ item }) {
    let rate = []
    for (let i = 0; i < item.rate; i++) {
        rate.push(1)
    }
    let noRate = []
    if (item.rate !== "") {
        for (let i = 0; i < (20 - item.rate); i++) {
            noRate.push(0)
        }
    }

    return (
        <div className={styles.content_skill}>
            <p>{item.tag}</p>
            <div className={styles.content_rate}>
                {rate.map(() => (
                    <div key={"R" + Math.random() * 1000000000} className={styles.rate}></div>
                ))}
                {noRate.map(() => (
                    <div key={"N" + Math.random() * 1000000000} className={styles.noRate}></div>
                ))}
            </div>
        </div>
    )
}

export default Skill