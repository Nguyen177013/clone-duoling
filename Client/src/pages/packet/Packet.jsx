import Levels from "../Levels/Levels";
import { AuthContext } from "../../context/authReducer/authContext";
import { useContext } from "react";

const Packet = (props) => {
    return (
        <section>
            <header className="quiz__levels__header primary__header__design">
                <h1 className="quiz__levels__header__title">State {props.index + 1}:</h1>
                <span className="quiz__levels__header__des">{props.title}</span>
            </header>
            {props.levels.map((level, index) => {
                let hasDone = false;
                if (level.user.includes(props._id)) {
                    hasDone = true;
                }
                return (
                    <Levels
                        index={props.index}
                        key={level._id}
                        other={level}
                        hasDone={hasDone}
                        />
                )
            })}
        </section>
    );
}

export default Packet;