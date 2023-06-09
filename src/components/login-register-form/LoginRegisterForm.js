import './LoginRegisterForm.css';
import logo from '../../wizard-left-cropped.png';
import { useNavigate } from 'react-router-dom';

const LoginRegisterForm = ({ fields, title, p, a, buttonText, redirectPr, redirectA }) => {

    const navigate = useNavigate();

    const nav = () => {
        navigate('/')
    };

    const expenses = () => {
        navigate('/expenses')
    }

    return (
        <div style={{ display: "flex", justifyContent: "start", margin: "auto" }}>
            <div>
                <img src={logo} style={{ marginTop: "42%", marginLeft: "20%" }}></img>
            </div>
            <div className="login-register-form">
                <div className='title'>
                    <h1 style={{ color: "var(--ww-white)", padding: "3%" }}>{title}</h1>
                </div>
                <form>
                    <div className='form'>
                        {/* <p>Name</p>
                        <input placeholder='name' />
                        <p>Email</p>
                        <input placeholder='name@email.com' />
                        <p>Password</p>
                        <input type="password" placeholder='********' /> */}

                        {fields.map((i) => (
                            <div key={i.id} className={i.class}>
                                <p>{i.label}</p>
                                <input placeholder={i.placeholder} type={i.type} />
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: "center" }}>{p}</p>
                    <a href={redirectA} style={{ paddingTop: "0" }}>{a}</a>
                    <div className='buttons'>
                        <button className='primary-outlined' onClick={nav}>
                            Cancel
                        </button>
                        <button className='primary' onClick={expenses}>
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginRegisterForm;