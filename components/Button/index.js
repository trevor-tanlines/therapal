import styles from "@/components/Button/button.module.css"

export default function Button () {
    return (
        <>
            <div className={styles.button}>
                <div className={styles.buttonChild}>
                <div className={styles.next}>Chat Now</div>
                </div>
            </div>
        </>
    )
}