import styles from "../style/main.module.scss"

function Footer() {
    return (
        <div id="contact" className={styles.footer}>
            <div className={styles.content_p}>
                <h3>Me contacter : </h3>
            </div>
            <div className={styles.content_i}>
                <a href="mailto:Dev Web<j9660628@gmail.com>?subject=Demande%20de%20renseignements%20-%20Dev%20Web"><i id="at" className="fa-solid fa-at"></i></a>
                <a href="https://www.linkedin.com/in/jean-louis-holzer-2aba65310/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.facebook.com/people/D%C3%A9veloppeur-Web-Full-Stack/61560286086432/"><i className="fa-brands fa-square-facebook"></i></a>
            </div>
        </div>
    )
}

export default Footer

/*
<i id="envelope" className="fa-regular fa-envelope-open"></i>
*/