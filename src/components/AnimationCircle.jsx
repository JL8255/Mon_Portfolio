import styles from "../style/main.module.scss"

function AnimationCircle() {
    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
    )
}

export default AnimationCircle