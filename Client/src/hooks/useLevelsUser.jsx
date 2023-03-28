import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authReducer/authContext";
export default function useLevelsUser() {
    const navigate = useNavigate();
    const { state } = useContext(AuthContext);
    const { token } = state.user;
    const addUser = async (id) => {
        const respone = await fetch("http://localhost:3000/api/levels/updateUserLevel", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({_id: id})
        });
        const json = await respone.json();
        if(json){
            navigate("/");
        }
    }
    return {addUser};
}