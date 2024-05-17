import styles from "./quizitems.module.css";
import { useState } from "react";

export default function QuestionOne({ checkboxValue, setCheckboxValue }) {
    const [clickedAnswer, setClickedAnswer] = useState('');

    const options = {
        anxiety: ["Therapist", "Forums"],
        depression: ["Therapist"],
        addiction: ["Therapist", "Programs"],
        ptsd: ["Therapist", "Programs"],
        bipolar: ["Therapist", "Forums"],
        "eating-disorder": ["Therapist", "Forums"],
        schizophrenia: ["Therapist"],
        paranoia: ["Therapist", "Forums"],
        psychosis: ["Therapist"],
        dissociation: ["Therapist", "Forums", "Programs"],
        other: ["Therapist", "Forums", "Programs"],
    };

    const handleChangeCheckBox = (e) => {
        const { checked, id } = e.target;
        setClickedAnswer(id); 

        if (checked) {
            setCheckboxValue(options[id]);
        } else {
            // Handle unchecking logic if needed
            setCheckboxValue(prev => prev.filter(value => !options[id].includes(value)));
        }
    };

    return (
        <div className={styles.mainContainer}>
            <h2>1. What would you like help with? (select all that apply)</h2>
            {Object.keys(options).map((key, index) => (
                <div
                    key={key}
                    className={styles.answers}
                    style={{ backgroundColor: clickedAnswer === key ? "var(--midnight)" : "white", color: clickedAnswer === key ? "var(--white)" : "black" }}
                >
                    <input 
                        tabIndex={index + 1}
                        type="checkbox"
                        name="checkbox"
                        id={key}
                        onChange={handleChangeCheckBox}
                    />
                    <label htmlFor={key}>{key.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</label>
                </div>
            ))}
            <div className={styles.progressBar}>
                <div className={styles.rectangle}>
                    <div className={styles.progress}></div>
                </div>
                <p>0%</p>
            </div>
        </div>
    );
}
