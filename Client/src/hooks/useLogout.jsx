import { useContext, } from "react";
import * as actions from "../context/authReducer/action";
import { AuthContext } from "../context/authReducer/authContext";

export function useLogout() {
    const { dispatch } = useContext(AuthContext);
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(actions.authLogout());
    }
    return {logout};
}