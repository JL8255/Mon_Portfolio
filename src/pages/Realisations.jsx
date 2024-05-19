import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"
import Thumbnails from "../components/Thumbnails"
import realisationsList from "../datas/Realisations.json"

function Realisations() {
    return (
        <div className={styles.realisation}>
            <Navigator />
            <div className={styles.content_realisation}>
                {realisationsList.map((realisation, index) => (
                    <div key={realisation.id}>
                        <Thumbnails realisation={realisation} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Realisations