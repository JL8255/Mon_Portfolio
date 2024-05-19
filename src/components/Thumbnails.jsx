import styles from "../style/main.module.scss"
import Tag from "./Tags"

function Thumbnails({ realisation }) {
    return (
        <div className={styles.thumbnails}>
            <h3>{realisation.name}</h3>
            <p>{realisation.description}</p>
            <div className={styles.content_tag}>
                {realisation.tag.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </div>
        </div>
    )
}

export default Thumbnails