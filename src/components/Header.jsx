import styles from "../style/main.module.scss"
import Avatar from "../assets/Avatar.png"
import Navigator from "./Navigator"
import { useState } from 'react';

function Header() {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className={styles.header}>
            <div onClick={() => setShowNav(!showNav)} className={styles.modale_nav}>
                <i className="fa-solid fa-bars"></i>
                <div className={showNav ? styles.navOn : styles.navOff}>
                    <Navigator />
                </div>
            </div>
            <img className={styles.avatar} src={Avatar} alt="avatar" />
            <div className={styles.name}>
                <h1>Jean-Louis Holzer</h1>
                <h2>Développeur Web Full-stack</h2>
            </div>
        </div>
    )
}

export default Header