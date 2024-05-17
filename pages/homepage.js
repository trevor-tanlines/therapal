import Navbar from "@/components/Navbar/index"
import Chart from "@/components/Chart/chart"
import styles from "@/styles/homes.module.css"
import Link from "next/link"
import Header from "@/components/header"
import Group from "@/public/images/group.png"
import Image from "next/image"
import Hands from "@/public/images/hands.png"
import Hospital from "@/public/images/hospital.jpg"
import head from "@/public/images/head.png"
import Sitting from "@/public/images/sitting.png"
import Talking from "@/public/images/talking.png"

export default function homePage () {
    return(
        <>
        <Header title={"Home"}/>
        
            <div className={styles.mainContainer}>
                
                <div className={styles.images}>
                <Image src={Talking} height={200} width={200}/>
                <Image src={head} width={200} height={200}/>
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
                <div className={styles.images}>
                <Image src={Group} width={200} height={200}/>
                <Image src={Sitting} width={200} height={200}/>
                </div>
             
                <div className={styles.navBar}>
                    <Navbar/>
                </div>
            </div>

            </div>
        </>

    )
}