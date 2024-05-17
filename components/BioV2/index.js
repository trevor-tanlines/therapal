import styles from "@/components/BioV2/bio.module.css"

export default function Bio() {
    return(
        <>
        <div className={styles.bio}>    
                
                <div className={styles.bioChild}/>
                    <div className={styles.aboutMeHelloContainer}>
                        <p className={styles.aboutMeHello}>🌿 About Me: Hello! I'm Dr. Stevens, a compassionate therapist dedicated</p>
                        <p className={styles.aboutMeHello}>to supporting individuals on their journey to overcome depression </p>
                        <p className={styles.aboutMeHello}>and rediscover joy in life. I provide a warm and empathetic environment </p>
                        <p className={styles.aboutMeHello}>where clients can explore their emotions, thoughts, and experiences without judgment.</p>
                        <p className={styles.aboutMeHello}>&nbsp;</p>
                        <p className={styles.aboutMeHello}>🧠 Specialization: My expertise lies in the treatment of depression,</p>
                        <p className={styles.aboutMeHello}>disorders, including generalized anxiety disorder</p>
                        <p className={styles.aboutMeHello}>including major depressive disorder (MDD), persistent depressive disorder (PDD),</p>
                        <p className={styles.aboutMeHello}>and seasonal affective disorder (SAD). I understand the </p>
                        <p className={styles.aboutMeHello}> complexities of depression and work collaboratively with my clients</p>
                        <p className={styles.aboutMeHello}>to develop personalized strategies for symptom management and emotional healing.</p>
                        <p className={styles.aboutMeHello}>fostering resilience.</p>
                        <p className={styles.aboutMeHello}>&nbsp;</p>
                        <p className={styles.aboutMeHello}>🛤️ Therapeutic Approach: I believe in a holistic approach to mental health, integrating evidence-based techniques such as cognitive-behavioural therapy (CBT), mindfulness-based stress reduction (MBSR), and acceptance and commitment therapy (ACT).</p>
                </div>
                    </div>
        </>
    )
}