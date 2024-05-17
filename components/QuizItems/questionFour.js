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
            <h2>2. Scale 1 through 5 how much does it aggrovate you(5 being the highest)</h2>
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
                <label htmlFor="1">1</label>
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
                <label htmlFor="2">2</label>
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
                <label htmlFor="3">3</label>
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
                <label htmlFor="4">4</label>
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
                <label htmlFor="5">5</label>
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








// import styles from "./quizitems.module.css"

// export default function QuestionFour() {
//     return(
//         <div className={styles.mainContainer}>
//             <h2>4. Do you find it difficult to enjoy activities you once found pleasurable?(1 being Very Difficult, and 5 being Not Difficult at all.)</h2>
//            <div>
//             <input 
//                 tabIndex={1}
//                  value="1"
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 />
//                 <label>1</label>
//              </div>
//             <div>
//             <input 
//                 tabIndex={2}
//                  value="2"
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 />
//                 <label>2</label>
//              </div>
//             <div>
//             <input 
//                 tabIndex={3}
//                  value="3"
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 />
//                 <label>3</label>
//              </div>
//             <div>
//             <input 
//                 tabIndex={4}
//                  value="4"
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 />
//                 <label>4</label>
//              </div>
//             <div>
//             <input 
//                 tabIndex={5}
//                 value="5"
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 />
//                 <label>5</label>
//                  </div>
//                  <div className={styles.progressBar}>
//                 <div className={styles.rectangle}>
//                     <div className={styles.questionFour}></div>
//                 </div>
//                 <p>60%</p>
//             </div>
//             </div>
//     )
// }