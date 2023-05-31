import './Login.css';
import FormModal from '../form-modal/FormModal';
import { useState } from 'react';


const Login = () => {
    const [fields, setFields] = useState([
        {id:1, label:"Email", placeholder:"name@email.com"},
        {id:2, label:"Password", placeholder:"********", type:"password"}
    ]) 
    return ( 
        <div className="login">
            <FormModal title="Log in" p="Don't have an account?" a = "Sign up" fields = {fields} buttonText="Log in" redirectPr = "/expenses" redirectA="/register"/>
        </div>
     );
}
 
export default Login;