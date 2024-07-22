import "../Styles/Quiz.css";
import React, { useState } from "react";
import plus from "../Images/plus.png";
import minus from "../Images/minus.png";
import QuizComp from "../QuizComponent/QuizComp";




const Collapsible = (child) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };

    return (
        <div>

            <hr className="colDivider-hr2-quiz" />

            <div className="quizContainer">
                <div className="btn1-quiz">
                    <div className="spacebtw-quiz" onClick={toggle}>
                        <h2>{child.title0} Quiz</h2>
                        <div className="progressBar-quiz"></div>
                    </div>


                    {open && (

                        <div className="quizContainer">
                            <div className="quizContent-quiz">
                                <QuizComp title={child.title} />
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>


    )
}
export default Collapsible;