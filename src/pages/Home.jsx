import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../style/main.module.scss"

function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <p>Home</p>
            <Footer />
        </div>
    )
}

export default Home