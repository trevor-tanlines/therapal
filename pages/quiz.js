import FinishedPage from "@/components/QuizItems/finishedPage"
import QuestionFive from "@/components/QuizItems/questionFive"
import QuestionFour from "@/components/QuizItems/questionFour"
import QuestionOne from "@/components/QuizItems/questionOne"
import QuestionThree from "@/components/QuizItems/questionThree"
import QuestionTwo from "@/components/QuizItems/questionTwo"
import styles from "@/styles/quiz.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Header from "@/components/header"

export default function Quiz () {
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [
        QuestionOne,
        QuestionTwo,
        QuestionThree,
        QuestionFour,
        QuestionFive,
        FinishedPage,
    ];

    console.log('value: ', checkboxValue);

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const CurrentPageComponent = pages[currentPage];

    return (
        <div className={styles.mainContainer}>
          <Header title={"Quiz"}/>

            <CurrentPageComponent checkboxValue={checkboxValue} setCheckboxValue={setCheckboxValue} />
            <div className={styles.buttons}>

                {
                    currentPage === 0 ? (
                        <Link className={styles.back} href="/">
                            <button>Back</button>
                        </Link>
                     ) : currentPage === 5 ? (
                        ""
                    ) : (
                        <button onClick={prevPage}>Back</button>
                     )
                }
                { currentPage === 5 ? ("") : <button onClick={nextPage}> Next</button>}
            </div>
        </div>
    );
    
    
}