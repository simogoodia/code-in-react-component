const useState = React.useState;

function Logo() {
    return (
        <div className="logo">
            <img src="/assets/imgs/logo.png" />
        </div>
    );
}

function LogoHeading() {
    return (
        <div className="logo-heading">
            <img src="/assets/imgs/Exclude.png" />
            <h2>Contact Blaster</h2>
        </div>
    );
}

function CreateAccount() {
    return (
        <div className="card">
            <h2>Create an account</h2>
            <div className="google-apple">
                <div className="google">
                    <img src="/assets/imgs/Google__G__Logo 1.png" />
                    <span>Google</span>
                </div>
                <div className="apple">
                    <img src="/assets/imgs/Apple_logo_black 1.png" />
                    <span>Apple ID</span>
                </div>
            </div>
                <div className="border-or">
                    <div className="border"></div>
                    <span>Or</span>
                    <div className="border"></div>
                </div>
                <form>
                    <div className="name">
                        <div className="first-name">
                            <i class="fa-regular fa-user"></i>
                            <input type="text" placeholder="Firstname" required />
                        </div>
                        <div className="last-name">
                            <i class="fa-regular fa-user"></i>
                            <input type="text" placeholder="Fastname" required />
                        </div>
                    </div>
                    <div className="email">
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="eg:johndoe@gmail.com" required />
                    </div>
                    <div className="password">
                        <i class="fa-solid fa-lock"></i>
                        <input type="email" placeholder="Enter your password" required />
                        <i class="fa-regular fa-eye"></i>
                    </div>
                    <div className="remember">
                        <label className="label-1" htmlFor="check">
                            <input type="checkbox" id="check" />
                            <span>Remember me</span>
                        </label>
                        <span className="forget-pass"><img src="/assets/imgs/link.svg" />Forget Password ?</span>
                        <label className="label-2" htmlFor="check-2">
                            <input type="checkbox" id="check-2" />
                            <span>I agree to the  <span> Terms and Conditions</span></span>
                        </label>
                    </div>
                    <input type="submit" value="Sign in to your account" />
                </form>
                <span className="sign-in">Already have an account ? <span>Sign in</span></span>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <LogoHeading />
            <div className="wrapper">
                <CreateAccount />
                <Logo />
            </div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));