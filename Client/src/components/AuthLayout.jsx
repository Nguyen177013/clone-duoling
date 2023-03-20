import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/authIndex.css";
const AuthLayout = () => {
    const [authBtn, setauthBtn] = useState({ title: "Signup", url: "http://127.0.0.1:5173/auth/signup" });
    function handleClick() {
        setauthBtn(preAuthBtn => {
            if (preAuthBtn.title === "Signup") {
                return {
                    title: "Login",
                    url: "http://127.0.0.1:5173/auth/"
                }
            }
            return {
                title: "Signup",
                url: "http://127.0.0.1:5173/auth/signup"
            }
        })
    }
    return (
        <>
            <div className="auth__layout">
                <div className="auth__form">
                    <Link to ="http://127.0.0.1:5173/">
                        <div className="form__exit">
                            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/577b23547c1fc5bd95934c7d90f02f4d.svg" alt="" />
                        </div>
                    </Link>
                    <Outlet />
                    <Link to={authBtn.url}>
                        <div className="form__change">
                            <button onClick={handleClick}>
                                <span>{authBtn.title}</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;