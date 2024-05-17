import styles from "@/styles/emergency.module.css"
import Image from "next/image"
import Phone from "@/public/images/phone.png"
import NavBar from "@/components/Navbar"
import Header from "@/components/header"
import Hospital from "@/public/images/hospital.jpg"
import Alarm from "@/public/images/alarm.png"

export default function Emergency () {

    return(
        <>
        <Header/>
       <div className={styles.mainContainer}>
       <h1>Emergency Contact Information</h1>
        <Image src={Phone} width={200} height={200}></Image>
        <h2>911</h2>
        <div>
        <p>For Immediate emergencies call this number</p>
        <p>1-855-242-3310</p>
        <p>Crisis or suicidal phone line call this number</p>
        </div>
        <Image src={Alarm} width={250} height={250}></Image>
       </div>
       <div className={styles.navBar}>
       <NavBar/>
        </div>
        </>

    )
}