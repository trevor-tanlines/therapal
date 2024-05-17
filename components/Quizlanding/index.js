import Image from "next/image"
import styles from "./quiz.module.css"
import Hand from "@/public/images/hand.png"
import Link from "next/link"
export default function Quizlanding () {
    return(
        
        <div className={styles.mainContainer}>

       
            <h1>Welcome to Therapal</h1>
            <br/>
            <p>Having trouble getting help? Need someone to talk to?Youre not alone.Were here for you.</p>
            <Image src={Hand} width={250} height={221}/>
            <p>Not sure what you need help with?</p>
            <p>Take our quiz,we can recommend some options</p>
            <Link   href="/quiz">
                <button>
                  Quiz
                </button>
            </Link>
            <Link href="/homepage">
            <button>Skip</button>
            </Link>
            </div>
          
    )}