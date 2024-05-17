import styles from "@/styles/emergency.module.css"
import Image from "next/image"
import Phone from "@/public/images/phone.png"
import Header from "@/components/header"
import Hospital from "@/public/images/hospital.jpg"
import Navbar from "@/components/Navbar"

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
        <Image src={Hospital} width={250} height={250}></Image>
       </div>
       <Navbar/>
        </>
    )
}