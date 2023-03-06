import NavItems from "../Navbar/NavItems";
import navItems from "../../data/navItems";
import "../../assets/css/navBar.css";
const Navbar = (props) => {
    return ( 
        <div className="quiz__navbar border__right__fullHeight fixed__left">
            <div className="quiz__logo">
                <a href="" className="quiz__homepage">
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg" alt="Duolingo Logo" />
                    <p>-CHing CHong</p>
                </a>
            </div>
            <div className="quiz__navitems">
                {navItems.map(item=>{
                    return item.name==="Learn"? 
                    <NavItems {...item} key ={item.name} status = "item__selected"/>:
                    <NavItems {...item} key ={item.name}/>
                })}
            </div>
        </div>
     );
}
 
export default Navbar;