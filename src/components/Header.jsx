import styles from "../style/main.module.scss"
import Avatar from "../assets/Avatar.png"

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.avatar} src={Avatar} alt="avatar" />
            <div>
                <h1>Jean-Louis Holzer</h1>
                <h2>Développeur Web Full-stack</h2>
            </div>
        </div>
    )
}

export default Header