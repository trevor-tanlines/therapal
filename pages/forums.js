import Navbar from "@/components/Navbar/index"
import Chart from "@/components/Chart/chart"
import styles from "@/styles/homes.module.css"
import Link from "next/link"
<<<<<<< HEAD
import Navbar from "@/components/Navbar"
import Header from "@/components/header"
import styles from "@/styles/forums.module.css"
=======
>>>>>>> origin/HEAD

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

                <div className={styles.navBar}>
                    <Navbar/>
                </div>
            </div>

            </div>
        </>

    )
}