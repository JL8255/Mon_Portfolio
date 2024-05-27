import styles from "../style/main.module.scss"
import Tag from "./Tags"

function Thumbnails({ realisation }) {
    return (
        <div className={styles.thumbnails}>
            <h4>{realisation.name}</h4>
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