import Chart from "@/components/Chart/chart"
import styles from "@/styles/homes.module.css"
import Link from "next/link"
import Head from "next/head"
import Header from "@/components/header"

export default function homePage () {
    return(
        <>
        <Header title={"Therapists"}/>

            <div className={styles.mainContainer}>
                
            <div className={styles.allButtons}>
                <div className={styles.button}>
                    <Link href="/therapist1">
                            <buttons style={{color: "white"}}>Therapist 1</buttons>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/therapist2">
                            <button style={{color: "white"}}>Therapist 2</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/therapist3">
                            <button style={{color: "white"}}>Therapist 3</button>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link href="/">
                            <button style={{color: "white"}}>Therapist 4</button>
                    </Link>
                </div>

            </div>

            </div>
        </>

    )
}