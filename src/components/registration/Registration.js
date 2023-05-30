import FormModal from "../form-modal/FormModal";
import "./Registration.css"
import { useState } from 'react';


const Registration = () => {
    const [fields, setFields]= useState([
        {id:0, label:"Name", placeholder:"name"},
        {id:1, label:"Email", placeholder:"name@email.com"},
        {id:2, label:"Password", placeholder:"********", type:"password"}
    ]);
    return (
        <div className="registration">
            <FormModal title="Registration" p="Already have an account?" a="Log in" fields={fields} buttonText = "Sign up" redirectPr="/expenses" redirectA="/login"/>
        </div>
    );
}

export default Registration;