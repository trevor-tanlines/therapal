import Chart from "@/components/Chart/chart"
import styles from "@/styles/forumsub.module.css"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Header from "@/components/header"

export default function homePage () {
    return(
        <>
        <Header title={"Forums"}/>
            <div className={styles.mainContainer}>

            <div className={styles.allButtons}>
                <div className={styles.button}>
                    <Link href="/">
                            <button>Food</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/">
                            <button>Music</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/">
                            <button>Cocktails</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/">
                            <button>Sports</button>
                    </Link>
                </div>
            </div>

            </div>
            <Navbar/>
        </>

    )
}