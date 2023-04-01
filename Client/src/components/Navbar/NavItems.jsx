import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authReducer/authContext";
import { useContext } from "react";
const NavItems = (props) => {
    const {state} = useContext(AuthContext);
    const {_id} = state.user;
    return (
        //     color: #1cb0f6;
        <div className={props.status || "uft"}>
            <NavLink
                to={(props.url =='user' || props.index === 3)? props.url+`/${_id}` : props.url}
                className={({isActive})=>(isActive)?"nav__item item__selected":"nav__item"}
                >
                <span className="item">
                    <div className="item__icon">
                        <img src={props.iconImage} alt="home icon" />
                    </div>
                    <span
                        className={"item__name"}
                        onClick={()=>{
                            console.log("hehe");
                        }}
                    >
                        {props.name}
                    </span>
                </span>
            </NavLink>
        </div>
    );
}

export default NavItems;