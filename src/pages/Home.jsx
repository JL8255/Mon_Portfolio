import styles from "../style/main.module.scss"
import Navigator from "../components/Navigator"
import Thumbnails from "../components/Thumbnails"
import SkillGroup from "../components/SkillGroup"
import realisationsList from "../datas/Realisations.json"
import competenceList from "../datas/Competence.json"
import imgCV from "../assets/CV.jpg"
import CV from "../assets/CV.pdf"
import IMG1 from "../assets/Créer_une_page_web_dynamique_en_JavaScript.jpg"
import IMG2 from "../assets/Planifier_le_développement_du_site_d'un_client.jpg"
import IMG3 from "../assets/Débuggage_et_optimisation_d'un_site_de_photographe.jpg"
import IMG4 from "../assets/Création_d'une_application_web_de_location_immobilière.jpg"
import IMG5 from "../assets/Développer_le_back-end_d'un_site_de_notation.jpg"

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.content_nav}>
                <Navigator />
            </div>
            <div className={styles.content_page}>

                <div id="apropos" className={styles.content_apropos}>
                    <p className={styles.apropos}>L'univers du développement me captive depuis longtemps. Quand j'étais étudiant, je cherchais comment réaliser des petits programmes pratiques pour gagner du temps et partager mes réalisations avec les autres.</p>
                    <p className={styles.apropos}>Cependant, j'ai orienté mes études et mon travail dans le domaine de la finance pour obtenir un DECF en 2006. J'ai toujours essayer d'aller au-delà de ma zone de confort, d'en apprendre plus et d'utiliser l'outil informatique comme un allié pour gagner en efficacité. C'est ainsi que j'ai appris en autodidacte à utiliser le langage VBA d'Excel pour générer des feuilles de calcul complexes.</p>
                    <p className={styles.apropos}>Malgré une situation confortable, j'ai décidé de tout quitter après 15 années comme responsable de mission chez un bailleur immobilier pour me consacrer entièrement au développement web depuis fin 2023. Grâce aux cours et aux mises en situations professionnelles dispensés par Openclassrooms, j'ai pu décrocher le diplôme de niveau 5 de Développeur Web Full Stack</p>
                    <p className={styles.apropos}>Je suis fasciné par ce nouveau monde de possibilités et j'apprécie toujours en apprendre d'avantage !</p>
                    <p className={styles.citation}>"Toute technologie suffisamment avancée est indiscernable de la magie." - Arthur C. Clarke</p>
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
                    <h3>Un point sur les compétences que j'ai aquises.</h3>
                    <div className={styles.content_skillGroup}>
                        {competenceList.map((competence, index) => (
                            <SkillGroup key={competence.id} competence={competence} />
                        ))}
                    </div>
                </div>

                <div id="CV" className={styles.content_CV}>
                    <h3>Mon CV à télécharger</h3>
                    <div className={styles.CVpage}>
                        <a href={CV} download="CV_Jean-Louis_Holzer"><i className="fa-solid fa-download"></i>Download ...</a>
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