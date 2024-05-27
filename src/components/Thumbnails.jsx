import styles from "../style/main.module.scss"
import Tag from "./Tags"

function Thumbnails({ realisation, IMG }) {
    return (
        <div className={styles.thumbnails}>
            <a className={styles.poster} href={realisation.repo}>
                <h4>{realisation.name}</h4>
                <div className={styles.content_img}>
                    <img src={IMG} alt={realisation.name} />
                </div>
            </a>
            <div className={styles.content_des}>
                <p>{realisation.description}</p>
                <div className={styles.content_tag}>
                    {realisation.tag.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Thumbnails