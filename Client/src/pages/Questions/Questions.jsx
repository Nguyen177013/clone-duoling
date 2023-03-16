import "../../assets/css/questions.css"
import { useEffect } from "react";
const Questions = () => {
    useEffect(() => {
        const questions = document.querySelectorAll('.question');
        questions.forEach((question, index) => {
            switch (true) {
                case index % 4 === 0:
                    question.style.transform = "translateX(0)";
                    break;
                case index % 2 !== 0 && index < 5:
                    question.style.transform = "translateX(-44px)";
                    break;
                case index % 2 === 0 && index < 5:
                    question.style.transform = "translateX(-70px)";
                    break;
                case index % 2 !== 0 && index >= 5:
                    question.style.transform = "translateX(44px)";
                    break;
                case index % 2 === 0 && index > 5:
                    question.style.transform = "translateX(70px)";
                    break;
                default:
                    question.style.transform = "translateX(0)";
                    break;
            }
        })
        return ()=>{
            console.log("gone :) 29/Question.jsx");
        }
    }, [])
    return (
        <div className="questions flex__column align-item__center">
            <div className="question question__first">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="question__btn">
                    <button>
                        1
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Questions;