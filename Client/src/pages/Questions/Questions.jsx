import "../../assets/css/questions.css"
import { useEffect} from "react";
import { Link } from "react-router-dom";
const Questions = ({index}) => {
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
        return () => {
        }
    }, [])
    return (
        <div className="questions flex__column align-item__center">
            <div className="question question__first">
                <div className="question__btn">
                    <Link to="/learn/unit/1">
                        <button>
                            1
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Questions;