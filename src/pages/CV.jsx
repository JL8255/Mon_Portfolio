import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"

function CV() {
    return (
        <div className={styles.home}>
            <Navigator />
            <div className={styles.content_home}>
                <p>Mon CV</p>
            </div>
        </div>
    )
}

export default CV