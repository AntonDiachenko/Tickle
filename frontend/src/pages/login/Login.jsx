import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">tickle</h3>
            <span className="loginDesc">Tickle your friends via the app so you don't have to get off your couch while watching Netflix.</span>
        </div> 
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput"></input>
                <input placeholder="Password" className="loginInput"></input>
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegiaterButton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
