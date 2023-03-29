import "../../assets/css/questions.css"
import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import speaker from "../../assets/imgs/speaker.png"
import useLevelsUser from "../../hooks/useLevelsUser";
const Questions = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const { addUser } = useLevelsUser();
    const { questions: data } = state;
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inCorrectAnswer, setInCorrectAnswer] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [status, setStatus] = useState({
        selected: null,
        answer: null,
        message: null,
        percent: 0
    });
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            fetch(`http://localhost:3000/api/questions/${data[i]}
            `)
                .then(res => res.json())
                .then(data => {
                    setQuestions(preQuestion => [...preQuestion, data]);
                });
        }
    }, []);
    // console.log(questions);
    function handleSubmit() {
        const { answer } = status;
        if (answer === true) {
            setIsCorrect(true);
            setStatus(preStatus => ({ ...preStatus, message: "Excellent", percent: preStatus.percent + 25 }));
        }
        else {
            setIsCorrect(false);
            setStatus(preStatus => ({ ...preStatus, message: "You fucking donkey" }));
            setInCorrectAnswer(preIncorrect => ([...preIncorrect, questions[currentQuestion]]));
        }
    }
    function handleSelect(index, answer) {
        setStatus(preStatus => ({
            ...preStatus,
            selected: index,
            answer: answer
        }));
    }
    function handleTexttoSpeech(text) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    function handleContinue() {
        setStatus(preCurrent => ({
            ...preCurrent,
            selected: null,
            answer: null,
            message: null,
        }))
        setIsCorrect(null);
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(preCurrent => preCurrent + 1);
        }
        else {
            if (inCorrectAnswer.length !== 0) {
                setCurrentQuestion(0);
                setQuestions(inCorrectAnswer);
                setInCorrectAnswer([]);
            }
            else {
                addUser(id);
            }
        }
    }
    return (
        < div className="questions" >
            {(questions[currentQuestion]) && (
                <div className="questions__container">
                    <div className="questions__header flex align-item__center">
                        <Link to="/">
                            <button className="exit__btn">X</button>
                        </Link>
                        <div className="status__bar">
                            <div className="status__bar__state" style={{ width: `${status.percent}%` }}></div>
                        </div>
                    </div>
                    <div className="questions__body">
                        <div className="questions flex__column align-item__center">
                            <div className="question__title">
                                <h1>
                                    {questions[currentQuestion].type.type_name === "Listenning" ?
                                        (<img src={speaker} alt="" onClick={() => handleTexttoSpeech(questions[currentQuestion].question)} />)
                                        :
                                        (<span>{questions[currentQuestion].question}</span>)}
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
                    <div className="questions__footer"
                        style={
                            isCorrect === !true ? { backgroundColor: "#ef0f0f5c" } : isCorrect === true ? { backgroundColor: "#39eb075c" } : {}
                        }>
                        <div className="question__result">
                            <span className={isCorrect ? "correct" : "incorrect"}>{status.message}</span>
                        </div>
                        <div className="questions__check">
                            <button
                                onClick={handleSubmit}
                                disabled={(status.selected === null) ? true : false}
                                style={isCorrect === null ? { display: "block" } : { display: "none" }}
                            >Submit</button>
                            <button
                                onClick={handleContinue}
                                style={isCorrect !== null ? { display: "block" } : { display: "none" }}
                            >Continue</button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}

export default Questions;