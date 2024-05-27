import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"
import Thumbnails from "../components/Thumbnails"
import realisationsList from "../datas/Realisations.json"
import imgCV from "../assets/CV.jpg"
import IMG1 from "../assets/Créer_une_page_web_dynamique_en_JavaScript.jpg"
import IMG2 from "../assets/Planifier_le_développement_du_site_d'un_client.jpg"
import IMG3 from "../assets/Débuggage_et_optimisation_d'un_site_de_photographe.jpg"
import IMG4 from "../assets/Création_d'une_application_web_de_location_immobilière.jpg"
import IMG5 from "../assets/Développer_le_back-end_d'un_site_de_notation.jpg"

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

                    <div>
                        <Thumbnails realisation={realisationsList[0]} IMG={IMG1} />
                    </div>
                    <div>
                        <Thumbnails realisation={realisationsList[1]} IMG={IMG2} />
                    </div>
                    <div>
                        <Thumbnails realisation={realisationsList[2]} IMG={IMG3} />
                    </div>
                    <div>
                        <Thumbnails realisation={realisationsList[3]} IMG={IMG4} />
                    </div>
                    <div>
                        <Thumbnails realisation={realisationsList[4]} IMG={IMG5} />
                    </div>

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
 {realisationsList.map((realisation, index) => (
    <div key={realisation.id}>
        <Thumbnails realisation={realisation} />
    </div>
))}
*/