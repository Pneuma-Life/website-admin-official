import React, {useState} from 'react';
import './Styles/Login.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom';

import axios from '../api/index';
import LoadingSpinner from '../Components/Loader/LoadingSpinner'
import Alert from '@mui/material/Alert';

function Login() {
    let navigate = useNavigate();
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            const response = await axios.post('admin/signin', 
            JSON.stringify({
                    email: formData.email,
                    password: formData.password,
            }),
            {
                headers: { "Content-Type": "application/json" },
            }
            )
            setFormData({
                email: '',
                password: '',
            });
            console.log(response);
            setSuccessMsg('User successfully signin');
            setLoading(false);
            navigate('/home');
        } catch (err) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false);
              } else {
                setErrorMsg(" Unable to signin user, try again");
                setLoading(false);
              }
        }
    }
    return (
        <div className='login-full-page'>
            <div className="container-login">
                <div className="login">
                    <form action='' method='post' className='login-form'>
                        <h5>Login</h5>
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
                            <label htmlFor="">Email</label>
                            <div className="input">
                                <AiOutlineMail />
                                <input 
                                name='email' 
                                type="email" 
                                placeholder='example@gmail.com' 
                                value={formData.email}
                                onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
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
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})} />
                            </div>
                        </div>
                        <div className="remember">
                            
                            <p>No account yet? <NavLink to='/signup'>Signup</NavLink> </p>
                        </div>
                        <button onClick={handleSubmit}>
                            Sign In {loading && <LoadingSpinner />}
                            </button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
}

export default Login;
