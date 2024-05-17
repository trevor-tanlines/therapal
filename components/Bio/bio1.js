import styles from "@/components/Bio/bio.module.css"

export default function bio() {
    return(
        <>
        <div className={styles.bio}>    
                
                <div className={styles.bioChild}/>
                    <div className={styles.aboutMeHelloContainer}>
                        <p className={styles.aboutMeHello}>🌿 About Me: Hello! I'm Dr. June, a dedicated therapist with a passion for helping individuals overcome anxiety and reclaim their lives.</p>
                        <p className={styles.aboutMeHello}>With a nurturing and empathetic approach, I create a</p>
                        <p className={styles.aboutMeHello}>safe space for my clients to explore their emotions,</p>
                        <p className={styles.aboutMeHello}>thoughts, and behaviours.</p>
                        <p className={styles.aboutMeHello}>&nbsp;</p>
                        <p className={styles.aboutMeHello}>🧠 Specialization: My expertise lies in anxiety</p>
                        <p className={styles.aboutMeHello}>disorders, including generalized anxiety disorder</p>
                        <p className={styles.aboutMeHello}>(GAD), social anxiety, panic disorder, and phobias.</p>
                        <p className={styles.aboutMeHello}>I understand the debilitating effects of anxiety and</p>
                        <p className={styles.aboutMeHello}>work collaboratively with my clients to develop</p>
                        <p className={styles.aboutMeHello}>personalized strategies for managing symptoms and</p>
                        <p className={styles.aboutMeHello}>fostering resilience.</p>
                        <p className={styles.aboutMeHello}>&nbsp;</p>
                        <p className={styles.aboutMeHello}>🛤️ Therapeutic Approach: I believe in a holistic approach to mental health, integrating evidence-based techniques such as cognitive-behavioural therapy (CBT), mindfulness-based stress reduction (MBSR), and acceptance and commitment therapy (ACT).</p>
                </div>
                    </div>
        </>
    )
}
