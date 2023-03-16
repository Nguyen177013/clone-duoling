import "../../assets/css/questions.css"
import { Link } from "react-router-dom";
const Questions = () => {
    return (
        <div className="questions">
            <div className="questions__container">
                <div className="questions__header flex align-item__center">
                    <Link to="/">
                        <button className="exit__btn">X</button>
                    </Link>
                    <div className="status__bar"></div>
                </div>
                <div className="questions__body">
                    <div className="questions flex__column align-item__center">
                        <div className="question__title">
                            <h1>
                                <span>Làm sao để nói "trà" ?</span>
                            </h1>
                        </div>
                        <div className="question__options ">
                            <div className="option option__btn">
                                <span>Tea</span>
                            </div>
                            <div className="option option__btn">
                                <span>Tea</span>
                            </div>
                            <div className="option option__btn">
                                <span>Tea</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="questions__footer">

                </div>
            </div>
        </div>
    );
}

export default Questions;