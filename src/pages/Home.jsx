import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"
import Thumbnails from "../components/Thumbnails"
import realisationsList from "../datas/Realisations.json"
import imgCV from "../assets/CV.jpg"

function Home() {
    return (
        <div className={styles.home}>
            <Navigator />
            <div className={styles.content_page}>

                <div id="home" className={styles.content_home}>
                    <p>Bienvenu sur mon portfolio !</p>
                </div>


                <div id="apropos" className={styles.content_apropos}>
                    <p>A propos de moi</p>
                </div>


                <div id="realisations" className={styles.content_realisation}>
                    {realisationsList.map((realisation, index) => (
                        <div key={realisation.id}>
                            <Thumbnails realisation={realisation} />
                        </div>
                    ))}
                </div>


                <div id="CV" className={styles.content_CV}>
                    <div className={styles.CVpage}>
                        <img src={imgCV} alt="CV" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home

/*
<div className={styles.content_home}>
<p>Bienvenu sur mon portfolio !</p>
</div>


<div className={styles.content_apropos}>
<p>A propos de moi</p>
</div>


<div className={styles.content_realisation}>
{realisationsList.map((realisation, index) => (
    <div key={realisation.id}>
        <Thumbnails realisation={realisation} />
    </div>
))}
</div>


<div className={styles.content_CV}>
<div className={styles.CVpage}>
    <img src={imgCV} alt="CV" />
</div>
</div>
*/