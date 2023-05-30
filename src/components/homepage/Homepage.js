import logo from '../../bigwiz.png';
import FormModal from '../form-modal/FormModal';
import './Homepage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    /**example 
    const [name, setName] = useState('firstName');
    const handleClick = () => {
        setName('secondName');
    }*/

    const par = "Your finances are a mess, let the Wallet Wizard help you, child...";
    const par2 = "If you want to start tracking your expenses and income, then click on the button ";

    /**not so efficient, since almost all fields require different types of input */
    // const [fields, setFields]= useState([
    //     {id:0, label:"Name", placeholder:"name"},
    //     {id:1, label:"Email", placeholder:"name@email.com"},
    //     {id:2, label:"Password", placeholder:"********", type:"password"}
    // ]);

    const navigate = useNavigate();

    const nav = () => {
        navigate('/register')
    };

    return (
        <div className="homepage">
            {/* <div style={{ height: "20px" }}></div> */}
            <h2 style={{ marginLeft: "18vmax" }}>{par2}</h2>
            <div>
                <button className='bubble' onClick={nav}>
                    <h2>
                        Join me.
                    </h2>
                </button>
                <div className='bubble'></div>
                <div className='bubble' style={{ padding: "1%", marginRight: "33%", marginTop: "1.5%" }}></div>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <h2 style={{ marginTop: "8%", marginLeft: "4%" }}>{par}</h2>
                    <img src={logo} className='wizard'></img>
                </div>
            </div>
        </div>

    );
}

export default Homepage;

