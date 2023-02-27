import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let handlesubmit =()=>{

    }
    return ( 
        <div className="login text-center bg-dark text-light w-50 container mt-5">
            <h1>Login Page</h1>
            <div className="login_form w-50 text-light mx-auto">
                <form action="" onSubmit={handlesubmit}>
              <div className="form-group px-5">
              <div className="email my-4">
                    <input type="email" placeholder="Enter Email" className="form-control" name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password my-4">
                    <input type="password" className="form-control" name="password" placeholder="Enter Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div className="login_button">
                    <button className="btn btn-outline-primary mt-2">Login</button>
                </div>
                <div className="signUp_button">
                    <p>Are you a new User</p>
                    <Link to="/signup" className="btn btn-outline-primary mt-2">Sign Up</Link>
                </div>
              </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;