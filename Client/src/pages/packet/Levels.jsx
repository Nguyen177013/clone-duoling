import Level from "./Level";
import pending from "../../assets/imgs/pending.gif";
import { useEffect, useState } from "react";
const Levels = (props) => {
    const [levels, setLevels] = useState(null);
    const [isPending, setPending] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/api/packages/getPackage")
            .then(res => res.json())
            .then(data => {
                setPending(false);
                setLevels(data);
            })
        return function clean() {

        }
    }, []);
    return (
        <div className="levels">
            {isPending &&
                <h4 className="levels__pending">Please wait 
                <img src={pending} alt="" className="pending__img" />
                </h4>}
            {levels && (
                levels.map((level, index)=>(<Level key={level._id} {...level} index ={index}/>))
            )}
        </div>
    );
}

export default Levels;