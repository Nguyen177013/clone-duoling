import NavItems from "../Navbar/NavItems";
import navItems from "../../data/navItems";
import { AuthContext } from "../../context/authReducer/authContext";
import { useContext } from "react";
import "../../assets/css/navBar.css";
const Navbar = (props) => {
    const a = useContext(AuthContext);
    return ( 
        <div className="quiz__navbar border__right__fullHeight fixed__left">
            <div className="quiz__logo">
                <a href="" className="quiz__homepage">
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg" alt="Duolingo Logo" />
                </a>
            </div>
            <div className="quiz__navitems">
                {navItems.map((item, index)=>{
                    return <NavItems {...item} index ={index} key ={item.name}/>
                })}
            </div>
        </div>
     );
}
 
export default Navbar;