import LoginRegisterForm from "../login-register-form/LoginRegisterForm";
import "./Registration.css"
import { useState } from 'react';


const Registration = () => {
    const [fields, setFields]= useState([
        {id:0, label:"Name", placeholder:"name"},
        {id:1, label:"Email", placeholder:"name@email.com"},
        {id:2, label:"Password", placeholder:"********", type:"password"},
        {id:3, label:"Default Currency", placeholder:"BAM", class:"dropdown"}
    ]);
    return (
        <div className="registration">
            <LoginRegisterForm title="Registration" p="Already have an account?" a="Log in" fields={fields} buttonText = "Sign up" redirectPr="/expenses" redirectA="/login"/>
        </div>
    );
}

export default Registration;