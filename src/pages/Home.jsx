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

                <div id="apropos" className={styles.content_apropos}>
                    <p className={styles.apropos}>J'ai toujours été intéressé pour le développement informatique. Chercher comment réaliser des petits programmes pratiques pour gagner du temps en codant. Je me suis lancé dans le domaine de la finance en 2002 et j'ai toujours essayer d'utiliser mes outils le plus efficacement possible. C'est comme ça que j'ai appris à utiliser le langage VBA d'Excel pour générer des feuilles de calcul complexes et gagner en efficacité dans mon travail. Ce faisant, après 15 années dans la finance, j'ai tout quitter pour me lancer dans le développement web fin 2023 et je me régale de toujours en apprendre d'avantage !</p>
                </div>


                <div id="realisations" className={styles.content_realisation}>
                    <h3>Voici quelques projets que j'ai pu réaliser durant mon apprentissage :</h3>
                    {realisationsList.map((realisation, index) => (
                        <div key={realisation.id}>
                            <Thumbnails realisation={realisation} />
                        </div>
                    ))}
                </div>

                <div id="competences" className={styles.content_competences}>
                    <h3>Un point sur les compétences qui j'ai aquises.</h3>
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