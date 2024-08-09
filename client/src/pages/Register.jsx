import { React, useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    async function registerFunc() {
        if (password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            try {
                const result = (await axios.post('http://localhost:5000/api/auth/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                }));
                console.log("User created successfully!");
                setSuccess(true);
                setName('');
                setEmail('');
                setPassword('');
                setCpassword('');
            } catch (error) {
                console.log(error);
                setError(true);
            }
        }
        else {
            alert('Passwords do not match');
        }

    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    {success && (<Alert key="success" variant="success">Registration Successful!</Alert>)}
                    {error && (<Alert key="danger" variant="danger">Something went wrong, please try again later...</Alert>)}
                    <div className="bs">
                        <h1>Create new account</h1>
                        <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="password" className="form-control" placeholder="Confirm password" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                        <button className="btn btn-primary mt-3" onClick={registerFunc}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;