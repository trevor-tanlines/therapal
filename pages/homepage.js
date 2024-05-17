import Chart from "@/components/Chart/chart"
import styles from "@/styles/homes.module.css"
import Link from "next/link"
import Header from "@/components/header"
import Navbar from "@/components/Navbar"

export default function homePage () {
    return(
        <>
        <Header title={"Home"}/>
        
            <div className={styles.mainContainer}>
                
                <div className={styles.chart}>
                    <Chart/>
                </div>

            <div className={styles.allButtons}>
                <div className={styles.button}>
                    <Link href="/emergency">
                            <button style={{color: "white", textAlign: "center"}}>Emergency</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/programs">
                            <button style={{color: "white", textAlign: "center"}}>Therapist</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/forums">
                            <button style={{color: "white", textAlign: "center"}}>Forums</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/quiz">
                            <button style={{color: "white", textAlign: "center"}}>Quiz</button>
                    </Link>
                </div>
            </div>

            </div>
            <Navbar/>
        </>

    )
}