import Questions from "../Questions/Questions";
const Level = (props) => {
    console.log(props);
    return (
        <section>
            <header className="quiz__levels__header primary__header__design">
                <h1 className="quiz__levels__header__title">State {props.index +1}:</h1>
                <span className="quiz__levels__header__des">{props.title}</span>
            </header>
                <Questions />
        </section>
    );
}

export default Level;