import { Link } from "react-router-dom";

const NavItems = (props) => {
    return (
        //     color: #1cb0f6;
        <div className={props.status || "uft"}>
            <Link to={props.url || ""} className="nav__item">
                <span className="item">
                    <div className="item__icon">
                        <img src={props.iconImage} alt="home icon" />
                    </div>
                    <span
                        className={"item__name"}
                        style={props.status ? { color: "#1cb0f6" } : {}}
                    >
                        {props.name}
                    </span>
                </span>
            </Link>
        </div>
    );
}

export default NavItems;