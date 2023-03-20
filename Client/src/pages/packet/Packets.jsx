import Packet from "./Packet";
import pending from "../../assets/imgs/pending.gif";
import { useEffect, useState } from "react";
const Packets = (props) => {
    const [packets, setPackets] = useState(null);
    const [isPending, setPending] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/api/packages/getLevels")
            .then(res => res.json())
            .then(data => {
                setPending(false);
                setPackets(data);
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
            {packets && (
                packets.data.map((packet, index)=>(<Packet key={packet._id} {...packet} index ={index}/>))
            )}
        </div>
    );
}

export default Packets;