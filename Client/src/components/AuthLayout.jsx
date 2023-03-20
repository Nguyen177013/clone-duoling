import { Outlet } from "react-router-dom";
import "../assets/css/authIndex.css";
const AuthLayout = () => {
    return (
        <>
            <div className="auth__layout">
                <div className="auth__form">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;