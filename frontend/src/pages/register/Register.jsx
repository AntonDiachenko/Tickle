import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">tickle</h3>
            <span className="loginDesc">Tickle your friends via the app so you don't have to get off your couch while watching Netflix.</span>
        </div> 
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="User name" className="loginInput"></input>
                <input placeholder="Email" className="loginInput"></input>
                <input placeholder="Password" className="loginInput"></input>
                <input placeholder=" Confirm Password" className="loginInput"></input>

                <button className="loginButton">Sign Up</button>
                <button className="loginRegiaterButton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
