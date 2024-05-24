import styles from "../style/main.module.scss"


function Navigator() {
    return (
        <div className={styles.navigator}>
            <ul>
                <a className={styles.Link} href="#home">Haut de page</a>
                <a className={styles.Link} href="#apropos">A propos de moi</a>
                <a className={styles.Link} href="#realisations">Réalisations</a>
                <a className={styles.Link} href="#CV">Curriculum vitæ</a>
                <a className={styles.Link} href="#contact">Me contacter</a>
            </ul>
        </div>
    )
}

export default Navigator