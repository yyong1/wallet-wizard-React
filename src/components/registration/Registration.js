import LoginRegisterForm from "../login-register-form/LoginRegisterForm";
import "./Registration.css"
import { useState } from 'react';
import logo from '../../wizard-left-cropped.png';
import '../login-register-form/LoginRegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react";


const Registration = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const home = () => {
        navigate('/');
    }

    const expenses = () => {
        navigate('/expenses');
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const [fields, setFields] = useState([
        { id: 0, label: "Name", placeholder: "name" },
        { id: 1, label: "Email", placeholder: "name@email.com" },
        { id: 2, label: "Password", placeholder: "********", type: "password" },
        // {id:3, label:"Default Currency", placeholder:"BAM", class:"dropdown"}
    ]);
    return (
        <div className="registration">
            {/* <LoginRegisterForm title="Registration" p="Already have an account?" a="Log in" fields={fields} buttonText = "Sign up" redirectPr="/expenses" redirectA="/login"/> */}
            <div style={{ display: "flex", justifyContent: "start", margin: "auto" }}>
                <div>
                    <img src={logo} style={{ marginTop: "42%", marginLeft: "20%" }} />
                </div>
                <div className="login-register-form">
                    <div className='title'>
                        <h1 >Register</h1>
                    </div>
                    {/* <form> */}
                    <div className='form'>
                        {fields.map((i) => (
                            <div key={i.id} className={i.class}>
                                <p>{i.label}</p>
                                <input placeholder={i.placeholder} type={i.type} />
                            </div>
                        ))}
                        <div>
                            <p>Default currency</p>
                            <button className="dropdown" onClick={handleOpen} >BAM
                                <Icon icon='pixelarticons:arrow-down-box' style={{color:"var(--ww-black)"}}/>
                            </button>
                            {open ? (
                                <div className="dropdown-list">
                                    <button className="dropdown-item">BAM</button>
                                    <button className="dropdown-item">EUR</button>
                                    <button className="dropdown-item">USD</button>                                </div>
                            ) : null}
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>Already have an account?</p>
                    <a onClick={login} style={{ paddingTop: "0" }}>Log in</a>
                    <div className='buttons'>
                        <button className='primary-outlined' onClick={home}>
                            Cancel
                        </button>
                        <button className='primary' onClick={expenses}>
                            Sign up
                        </button>
                    </div>
                    {/* </form> */}
                </div>

            </div>
        </div>
    );
}

export default Registration;