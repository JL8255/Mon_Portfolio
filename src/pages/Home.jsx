import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"

function Home() {
    return (
        <div className={styles.home}>
            <Navigator />
            <div className={styles.content_home}>

            </div>
        </div>
    )
}

export default Home