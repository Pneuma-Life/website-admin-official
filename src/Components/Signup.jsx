import React, {useState} from 'react';
import './Styles/Login.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate, NavLink } from "react-router-dom";

import axios from '../api/index';
import LoadingSpinner from '../Components/Loader/LoadingSpinner'
import Alert from '@mui/material/Alert';

function Login() {
    let navigate = useNavigate();
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: true,
        isVerified: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            const response = await axios.post('admin/signup', 
            JSON.stringify({
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    password: form.password,
                    isAdmin: true,
                    isVerified: true
            }),
            {
                headers: { "Content-Type": "application/json" },
            }
            )
            console.log(response)
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                isAdmin: true,
                isVerified: true
            });
            setSuccessMsg('User successfully signed up');
            setLoading(false);
            navigate('/home');
        } catch (err) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false);
              } else {
                setErrorMsg(" Unable to sign up user, try again");
                setLoading(false);
              }
        }
    }

    return (
        <div className='login-full-page'>
            <div className="container-login">
                <div className="login">
                    <form className='login-form'>
                        <h5>Signup</h5>
                        { errorMsg ? 
                            <Alert severity="error" variant="outlined">
                                {errorMsg}
                            </Alert> 
                            : null }
                        { successMsg ?
                            <Alert severity="success" variant="outlined" >
                                {successMsg}
                            </Alert>
                        : null}
                        <div className="user-input">
                            <label htmlFor="">Firstname</label>
                            <div className="input">
                                <AiOutlineMail />
                                <input 
                                name='firstname' 
                                type="text" 
                                placeholder='firstname'
                                value={form.firstName}
                                onChange={(e)=>setForm({...form, firstName: e.target.value})}
                                 />
                            </div>
                        </div>
                        <div className="user-input">
                            <label htmlFor="">Lastname</label>
                            <div className="input">
                                <AiOutlineMail />
                                <input 
                                name='lasttname' 
                                type="text" 
                                placeholder='lastname' 
                                value={form.lastName}
                                onChange={(e)=>setForm({...form, lastName: e.target.value})}/>
                            </div>
                        </div>
                        <div className="user-input">
                            <label htmlFor="">Email</label>
                            <div className="input">
                                <AiOutlineMail />
                                <input 
                                name='email' 
                                type="email" 
                                placeholder='example@gmail.com' 
                                value={form.email}
                                onChange={(e)=>setForm({...form, email: e.target.value})}/>
                            </div>
                        </div>
                        <div className="user-input">
                            <label htmlFor="">Password</label>
                            <div className="input">
                                <RiLockPasswordLine />
                                <input 
                                name='password' 
                                type="Password" 
                                placeholder='password'
                                value={form.password}
                                onChange={(e)=>setForm({...form, password: e.target.value})} />
                            </div>
                        </div>
                        <div className="remember">
                        <p>Have an account? <NavLink to='/'>Login</NavLink> </p>
                        </div>
                        <button onClick={handleSubmit}>
                            Sign up {loading && <LoadingSpinner /> }
                        </button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
}

export default Login;
