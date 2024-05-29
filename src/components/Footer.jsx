import styles from "../style/main.module.scss"

function Footer() {
    return (
        <div id="contact" className={styles.footer}>
            <div className={styles.content_p}>
                <h3>Me contacter : </h3>
            </div>
            <div className={styles.content_i}>
                <i id="at" className="fa-solid fa-at"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-facebook"></i>
            </div>
        </div>
    )
}

export default Footer

/*
<i id="envelope" className="fa-regular fa-envelope-open"></i>
*/