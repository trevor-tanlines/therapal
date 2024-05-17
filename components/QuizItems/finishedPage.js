import styles from "./quizitems.module.css"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image";


export default function FinishedPage({checkboxValue}) {
    const [program, setPrograms] = useState(false);
    const [therapist, setTherapist] = useState(false);
    const [forums, setForums] = useState(false);
     console.log('Finished',checkboxValue);

     useEffect(() => {
        if (checkboxValue?.includes("Therapist")) {
            setTherapist(true);
        }
        if (checkboxValue?.includes("Programs")){
            setPrograms(true);
        }
        if (checkboxValue?.includes("Forums")) {
            setForums(true);
        }
    }, [checkboxValue]);

    return(
        <>
        
             <p className={styles.finishedHeader}>Select The Category For You</p>
        
        <div className={styles.mainContainer}>

            <div className={styles.options}>
           <Link href="/emergency">
            <button>Emergency</button>
            </Link>
            {program && (
            <Link href="/main">
            <button> Programs</button>
            </Link>
            )}
            {therapist && (
                <Link href="/therapist">
                <button>Therapist</button>
                </Link>
            )}
            { forums && (
            <Link href="/forums">
            <button> Forms</button>
            </Link>
            )}
              { forums && (
            <Link href="/homepage">
            <button>Home</button>
            </Link>
            )}
            
            </div>
        
             <div className={styles.progressBar}>
                <div className={styles.rectangle}>
                    <div className={styles.finishedPage}></div>
                </div>
                <p>100%</p>
            </div>

            </div>
            </>
    )
}