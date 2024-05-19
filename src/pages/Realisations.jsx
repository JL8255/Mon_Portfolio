import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"
import Thumbnails from "../components/Thumbnails"

function Realisations() {
    return (
        <div className={styles.home}>
            <Navigator />
            <div className={styles.content_home}>
                <Thumbnails />
            </div>
        </div>
    )
}

export default Realisations