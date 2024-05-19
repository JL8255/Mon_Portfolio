import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"

function APropos() {
    return (
        <div className={styles.apropos}>
            <Navigator />
            <div className={styles.content_apropos}>
                <p>A propos de moi</p>
            </div>
        </div>
    )
}

export default APropos