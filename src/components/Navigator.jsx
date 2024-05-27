import styles from "../style/main.module.scss"


function Navigator() {
    return (
        <div className={styles.navigator}>
            <ul>
                <a className={styles.Link} href="#apropos">
                    <i class="fa-solid fa-code"></i>
                    A propos de moi</a>
                <a className={styles.Link} href="#realisations">
                    <i class="fa-solid fa-code"></i>
                    Réalisations</a>
                <a className={styles.Link} href="#competences">
                    <i class="fa-solid fa-code"></i>
                    Compétences</a>
                <a className={styles.Link} href="#CV">
                    <i class="fa-solid fa-code"></i>
                    Curriculum vitæ</a>
                <a className={styles.Link} href="#contact">
                    <i class="fa-solid fa-code"></i>
                    Me contacter</a>
            </ul>
        </div>
    )
}

export default Navigator