import styles from "@/components/BioV3/bio.module.css"

export default function Bio() {
    return(
        <>
        <div className={styles.bio}>    
                
                <div className={styles.bioChild}/>
                    <div className={styles.aboutMeHelloContainer}>
                        <p className={styles.aboutMeHello}>🌿 About Me: Hello! I'm Dr. Russles, a dedicated therapist with a focus on</p>
                        <p className={styles.aboutMeHello}>helping individuals overcome addiction and reclaim control of their lives.</p>
                        <p className={styles.aboutMeHello}>I offer a compassionate and non-judgmental space where clients can explore</p>
                        <p className={styles.aboutMeHello}>their struggles with substance use and work towards lasting recovery.</p>
                        <p className={styles.aboutMeHello}>&nbsp;</p>
                        <p className={styles.aboutMeHello}>🧠 Specialization: My expertise lies in addiction treatment,</p>
                        <p className={styles.aboutMeHello}>including substance use disorders such as alcoholism,</p>
                        <p className={styles.aboutMeHello}>drug addiction, and behavioral addictions (such as gambling, internet addiction).</p>
                        <p className={styles.aboutMeHello}>I understand the complexities of addiction and am committed to supporting my clients</p>
                        <p className={styles.aboutMeHello}> through every step of their journey towards sobriety and healing.</p>
                        <p className={styles.aboutMeHello}>&nbsp;</p>
                        <p className={styles.aboutMeHello}>🛤️ Therapeutic Approach: I believe in a holistic approach to addiction recovery, integrating evidence-based modalities such as cognitive-behavioral therapy (CBT), motivational interviewing (MI), and dialectical behavior therapy (DBT).</p>
                </div>
                    </div>
        </>
    )
}