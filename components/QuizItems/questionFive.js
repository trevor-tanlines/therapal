import styles from "./quizitems.module.css"
import { useState } from 'react';

export default function QuestionTwo() {
    const [clickedAnswer, setClickedAnswer] = useState('');

    const handleChangeCheckBox = (e) => {
        const { checked, id } = e.target;
        setClickedAnswer(checked ? id : ''); 
    };

    return (
        <div className={styles.mainContainer}>
            <h2>2. Yes or No Have you thought of harming yourself?</h2>
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
                <label htmlFor="yes">yes</label>
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
                <label htmlFor="no">no</label>
            </div>
          </div>
    );
}
