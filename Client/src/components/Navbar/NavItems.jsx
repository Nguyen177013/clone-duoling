const NavItems = (props) => {
    return ( 
        //     color: #1cb0f6;
        <div className= {props.status || "uft"}>
        <a href="" className="nav__item">
            <span className="item">
                <div className="item__icon">
                    <img src={props.iconImage} alt="home icon" />
                </div>
                <span 
                className={"item__name"}
                style ={props.status? {color: "#1cb0f6"}:{}}
                >
                    {props.name}
                </span>
            </span>
        </a>
    </div>
     );
}
 
export default NavItems;