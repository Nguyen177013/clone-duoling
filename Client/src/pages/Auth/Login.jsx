const Login = () => {
    return ( 
        <form action="">
            <h1>Login</h1>
            <div className="form__input">
                <input type="text" placeholder="email or username" name="input"/>
                <input type="text" placeholder="password"/>
            </div>
            <div className="form__submit">
                <button>Login</button>
            </div>
        </form>
     );
}
 
export default Login;