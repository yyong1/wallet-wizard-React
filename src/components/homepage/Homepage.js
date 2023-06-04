import logo from '../../bigwiz.png';
import './Homepage.css'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const par = "Your finances are a mess, let the Wallet Wizard help you, child...";
    const par2 = "If you want to start tracking your expenses and income, then click on the button ";

    const navigate = useNavigate();

    const nav = () => {
        navigate('/register')
    };

    return (
        <div className="homepage">
            {/* <div style={{ height: "20px" }}></div> */}
            <h2>{par2}</h2>
            <div>
                <button className='bubble' onClick={nav}>
                    <h2>
                        Join me.
                    </h2>
                </button>
                <div className='bubble'></div>
                <div className='bubble' style={{ padding: "1%", marginRight: "33%", marginTop: "1.5%" }}></div>
                <div className='wizard-text'>
                    <h2>{par}</h2>
                    <img src={logo}
                        style={{}}
                    ></img>
                </div>
            </div>
        </div>

    );
}

export default Homepage;

