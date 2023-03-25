import "../../assets/css/questions.css"
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Questions = (props) => {
    const { state } = useLocation();
    const { questions: data } = state;
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [status, setStatus] = useState({
        selected: null,
        answer: null,
    });
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            fetch(`http://localhost:3000/api/questions/${data[i]}`)
                .then(res => res.json())
                .then(data => {
                    setQuestions(preQuestion => [...preQuestion, data]);
                });
        }
    }, []);
    console.log(questions);
    function handleSubmit() {
        const { answer } = status;
        console.log({answer});
        if (answer === true) {

            setStatus({
                selected: null,
                answer: null,
            });
            setCurrentQuestion(preCurrent => preCurrent + 1);
        }
        return console.log("Trả  lời sai :DD");
    }
    function handleSelect(index, answer) {
        console.log({index, answer});
        setStatus({
            selected: index,
            answer: answer
        });
    }
    return (
        < div className="questions" >
            {questions[currentQuestion] && (

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
                                    <span>{questions[currentQuestion].question}</span>
                                </h1>
                            </div>
                            <div className="question__options ">
                                {questions[currentQuestion] && questions[currentQuestion].options.map((option, index) =>
                                (<div
                                    className={status.selected === index ? "option option__btn selected" : "option option__btn"}
                                    key={option._id}
                                    onClick={() => handleSelect(index, option.result)}
                                >
                                    <span>{option.option}</span>
                                </div>)
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="questions__footer">
                        <div className="questions__check">
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}

export default Questions;