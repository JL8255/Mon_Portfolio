import styles from "../style/main.module.scss"
import { Link } from 'react-router-dom'


function Navigator() {
    return (
        <div className={styles.navigator}>
            <ul>
                <Link className={styles.Link} to="/Home">Home</Link>
                <Link className={styles.Link} to="/APropos">A propos de moi</Link>
                <Link className={styles.Link} to="/Realisations">Mes Réalisations</Link>
                <Link className={styles.Link} to="/CV">Mon CV</Link>
            </ul>
        </div>
    )
}

export default Navigator