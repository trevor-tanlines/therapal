import styles from "./quizitems.module.css"
import { useState } from 'react';

export default function QuestionTwo() {
    const [clickedAnswer, setClickedAnswer] = useState('');

    const handleChangeCheckBox = (e) => {
        const { checked, id } = e.target;
        setClickedAnswer(checked ? id : ''); // Update clickedAnswer with the checkbox ID if checked, otherwise reset to empty string
    };

    return (
        <div className={styles.mainContainer}>
            <h2>2. How much do these ilness bother you?</h2>
            <div>
                <input 
                    tabIndex={1}
                    type="checkbox"
                    name="checkbox"
                    id="very-often"
                    onChange={handleChangeCheckBox}
                    style={{
                        backgroundColor: clickedAnswer === 'very-often' ? 'var(--midnight)' : 'white',
                        color: clickedAnswer === 'very-often' ? 'var(--white)' : 'black'
                    }}
                />
                <label htmlFor="very-intense">Very Intense</label>
            </div>
            <div>
                <input 
                    tabIndex={2}
                    type="checkbox"
                    name="checkbox"
                    id="often"
                    onChange={handleChangeCheckBox}
                    style={{
                        backgroundColor: clickedAnswer === 'often' ? 'var(--midnight)' : 'white',
                        color: clickedAnswer === 'often' ? 'var(--white)' : 'black'
                    }}
                />
                <label htmlFor="Intense">Intense</label>
            </div>
            <div>
                <input 
                    tabIndex={2}
                    type="checkbox"
                    name="checkbox"
                    id="often"
                    onChange={handleChangeCheckBox}
                    style={{
                        backgroundColor: clickedAnswer === 'often' ? 'var(--midnight)' : 'white',
                        color: clickedAnswer === 'often' ? 'var(--white)' : 'black'
                    }}
                />
                <label htmlFor="Midly">Midly</label>
            </div>
            <div>
                <input 
                    tabIndex={2}
                    type="checkbox"
                    name="checkbox"
                    id="often"
                    onChange={handleChangeCheckBox}
                    style={{
                        backgroundColor: clickedAnswer === 'often' ? 'var(--midnight)' : 'white',
                        color: clickedAnswer === 'often' ? 'var(--white)' : 'black'
                    }}
                />
                <label htmlFor="None">None</label>
            </div>
            
            <div className={styles.progressBar}>
                <div className={styles.rectangle}>
                    <div className={styles.questionTwo}></div>
                </div>
                <p>20%</p>
            </div>
        </div>
    );
}








