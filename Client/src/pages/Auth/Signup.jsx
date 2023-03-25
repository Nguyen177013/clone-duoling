import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import pending from "../../assets/imgs/pending.gif";
const url = "http://localhost:3000/api/users/signup";
const Signup = () => {
    const { errors, login, isLoading } = useLogin();
    const [input, setInput] = useState({ username: "", email: "", password: "" });
    function handleChange(e) {
        const { name, value } = e.target;
        setInput(preInput => ({ ...preInput, [name]: value }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        await login(url ,input.username, input.password, input.email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                {errors && <div className="error">{errors}</div>}
                <div className="form__input">
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={input.username}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={input.input}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={input.input}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__submit">
                    <button> Signup{isLoading ? <img src={pending} alt="" className="pending__fetching" /> : ""}</button>
                </div>
            </form>
            <div className="auth__options">
                <div className="cross__line"></div>
                <div className="options__title">Or login with</div>
                <div className="cross__line"></div>
            </div>
            <div className="auth__option__btn">
                <button>
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/ded9ca9461387f30221b67f627227388.svg" alt="" />
                    <span className="btn__facebook">Facebook</span>
                </button>
                <button >
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/7da752378a3b1b8bbcd94a4d4f10561e.svg" alt="" />
                    <span className="btn__google">Google</span>
                </button>
            </div>
        </div>
    );
}

export default Signup;