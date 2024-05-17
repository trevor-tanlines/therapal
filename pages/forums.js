import Chart from "@/components/Chart/chart"
import styles from "@/styles/homes.module.css"
import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function homePage () {
    return(
        <>
            <div className={styles.mainContainer}>
                
                <div className={styles.chart}>
                    <Chart/>
                </div>

            <div className={styles.allButtons}>
                <div className={styles.button}>
                    <Link href="/">
                            <button>Emergency</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/">
                            <button>Programs</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/">
                            <button>Forums</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/quiz">
                            <button>Quiz</button>
                    </Link>
                </div>
            </div>

            </div>
            <Navbar/>
        </>

    )
}