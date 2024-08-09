import { React, useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    async function signinFunc() {
        const user = {
            email,
            password
        }
        try {
            const result = (await axios.post('http://localhost:5000/api/auth/login', user)).data;
            setSuccess(true);
            console.log(user.email);
            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href='/home'
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    {success && (<Alert key="success" variant="success">Sign in Successful!</Alert>)}
                    {error && (<Alert key="danger" variant="danger">Invalid Credentials!</Alert>)}
                    <div className="bs">
                        <h1>Sign in</h1>
                        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className="btn btn-primary mt-3" onClick={signinFunc}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;