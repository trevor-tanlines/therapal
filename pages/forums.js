import Chart from "@/components/Chart/chart"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Header from "@/components/header"
import styles from "@/styles/forums.module.css"

export default function homePage () {
    return(
        <>
        <Header title={"Forums"}/>
            <div className={styles.mainContainer}>

            <div className={styles.allButtons}>
                <div className={styles.button}>
                    <Link href="/food">
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