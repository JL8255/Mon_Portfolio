import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"

function APropos() {
    return (
        <div className={styles.home}>
            <Navigator />
            <div className={styles.content_home}>
                <p>A propos de moi</p>
            </div>
        </div>
    )
}

export default APropos