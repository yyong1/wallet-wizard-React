import './Login.css';
import LoginRegisterForm from '../login-register-form/LoginRegisterForm';
import { useState } from 'react';
import logo from '../../wizard-left-cropped.png';
import { useNavigate } from 'react-router-dom';
import '../login-register-form/LoginRegisterForm.css';

const Login = () => {

    const navigate = useNavigate();

    const register = () => {
        navigate('/register');
    }

    const home = () => {
        navigate('/');
    }

    const expenses = () => {
        navigate('/expenses');
    }

    const [fields, setFields] = useState([
        { id: 1, label: "Email", placeholder: "name@email.com" },
        { id: 2, label: "Password", placeholder: "********", type: "password" }
    ])
    return (
        <div className="login">
            {/* <LoginRegisterForm title="Log in" p="Don't have an account?" a = "Sign up" fields = {fields} buttonText="Log in" redirectPr = "/expenses" redirectA="/register"/> */}
            <div style={{ display: "flex", justifyContent: "start", margin: "auto" }}>
                <div>
                    <img src={logo} style={{ marginTop: "42%", marginLeft: "20%" }}/>
                </div>
                <div className="login-register-form" style={{height:"50vh"}}>
                    <div className='title'>
                        <h1 >Log in</h1>
                    </div>
                    <form>
                        <div className='form'>
                            {fields.map((i) => (
                                <div key={i.id} className={i.class}>
                                    <p>{i.label}</p>
                                    <input placeholder={i.placeholder} type={i.type} />
                                </div>
                            ))}
                        </div>
                        <p style={{ textAlign: "center" }}>Don't have an account?</p>
                        <a onClick={register} style={{ paddingTop: "0" }}>Sign up</a>
                        <div className='buttons'>
                            <button className='primary-outlined' onClick={home}>
                                Cancel
                            </button>
                            <button className='primary' onClick={expenses}>
                                Log in
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;