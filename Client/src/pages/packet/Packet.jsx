import Levels from "../Levels/Levels";
const Packet = (props) => {
    return (
        <section>
            <header className="quiz__levels__header primary__header__design">
                <h1 className="quiz__levels__header__title">State {props.index +1}:</h1>
                <span className="quiz__levels__header__des">{props.title}</span>
            </header>
            {props.levels.map(level =>(
                <Levels index ={props.index} key = {level._id}/>
            ))}
        </section>
    );
}

export default Packet;