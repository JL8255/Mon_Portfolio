import styles from "../style/main.module.scss"


function Navigator() {
    return (
        <div className={styles.navigator}>
            <ul>
                <a className={styles.Link} href="#apropos">
                    <i className="fa-solid fa-code"></i>
                    A propos de moi</a>
                <a className={styles.Link} href="#realisations">
                    <i className="fa-solid fa-code"></i>
                    Réalisations</a>
                <a className={styles.Link} href="#competences">
                    <i className="fa-solid fa-code"></i>
                    Compétences</a>
                <a className={styles.Link} href="#CV">
                    <i className="fa-solid fa-code"></i>
                    Curriculum vitæ</a>
                <a className={styles.Link} href="#contact">
                    <i className="fa-solid fa-code"></i>
                    Me contacter</a>
            </ul>
        </div>
    )
}

export default Navigator