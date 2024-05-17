import Navbar from "@/components/Navbar/index"
import Chart from "@/components/Chart/chart"
import styles from "@/styles/therapist.module.css"
import Link from "next/link"
import Bio from "@/components/BioV3/index"
import Button from "@/components/Button"
import Header from "@/components/header"
import Image from "next/image"

export default function homePage () {
    return(
        <>
         <Header title={"Therapist 3"}/>

            <div className={styles.mainContainer}>
            <div className={styles.profileContainer}>
            <div className={styles.pic}>
            <Image src={"/Images/t3.png"} alt="Home" height={266} width={168}/>
            </div>
            <div className={styles.name}>
                <p>Dr. Russles</p>
            </div>
            <div className={styles.button}>
                    <Button/>
                </div>
                </div>

                <div className={styles.bio}>
                    <Bio/>
                </div>

                <div className={styles.navBar}>
                    <Navbar/>
                </div>
            

            </div>
        </>

    )
}