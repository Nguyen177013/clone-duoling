import { useEffect} from "react";
import { Link } from "react-router-dom";
const Levels = ({index}) => {
    useEffect(() => {
        const levels = document.querySelectorAll('.level');
        levels.forEach((level, index) => {
            switch (true) {
                case index % 4 === 0:
                    level.style.transform = "translateX(0)";
                    break;
                case index % 2 !== 0 && index < 5:
                    level.style.transform = "translateX(-44px)";
                    break;
                case index % 2 === 0 && index < 5:
                    level.style.transform = "translateX(-70px)";
                    break;
                case index % 2 !== 0 && index >= 5:
                    level.style.transform = "translateX(44px)";
                    break;
                case index % 2 === 0 && index > 5:
                    level.style.transform = "translateX(70px)";
                    break;
                default:
                    level.style.transform = "translateX(0)";
                    break;
            }
        })
        return () => {
        }
    }, [])
    return (
        <div className="levels flex__column align-item__center">
            <div className="level question__first">
                <div className="level__btn">
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

export default Levels;