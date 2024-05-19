import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"

function CV() {
    return (
        <div className={styles.CV}>
            <Navigator />
            <div className={styles.content_CV}>
                <p>Mon CV</p>
            </div>
        </div>
    )
}

export default CV