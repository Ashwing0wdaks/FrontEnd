import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    let [Name, setName] = useState('')
    let [Num, setNum] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPass] = useState('')
    let [confirmPassword, setConfirm] = useState('')

    let navigate = useNavigate()
    let handleConfirm = (e) => {
        e.preventDefault()
        let data = {Name, email, password, confirmPassword }
        if (Name && email && (password == confirmPassword)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                    // console.log(data);
                })
        } else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className="signup text-center bg-dark text-light w-50 container mt-5">
            <h1>Sign Up page</h1>
            <div className="signup_form w-50 mx-auto text-light mt-2">
                <form action="" onSubmit={handleConfirm}>
                    <div className="Name">
                        <input type="text" placeholder="Enter Name" className="form-control mt-2" name="Name"
                            value={Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mobile_Number">
                        <input type="num" className="form-control mt-2" placeholder="Enter Number" name="mobile_Number"
                            value={Num} onChange={(e) => setNum(e.target.value)} />
                    </div>
                    <div className="email">
                        <input type="email" className="form-control mt-2" placeholder="Enter email" name="email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <input type="password" className="form-control mt-2" placeholder="Enter password" name="password"
                            value={password} onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className="confirm_password">
                        <input type="password" className="form-control mt-2" placeholder="Enter password" name="cofirm_password"
                            value={confirmPassword} onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                    <div className="signup">
                        <button className="btn btn-outline-primary mt-2 ml-2">Sign Up</button>
                    </div>
                    <div className="login_button">
                        <p>Already a user ?</p>
                        <Link to="/" className="btn btn-outline-primary mt-2">Login</Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignUp;