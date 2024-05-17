import Image from "next/image"
import styles from "./header.module.css"
import HeaderBackground from "@/public/images/HeaderBackground.svg"

export default function Header({title}) {
    return(
        <>

            <div className={styles.header}>
                <h1>{title}</h1>
                <Image className={styles.headerItem} alt="" src={HeaderBackground} />
            </div>


        </>
    )
}