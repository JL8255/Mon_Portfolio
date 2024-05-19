import styles from "../style/main.module.scss"

function Tag({ tag }) {
    return (
        <div className={styles.tag}>
            {tag}
        </div>

    )
}

export default Tag