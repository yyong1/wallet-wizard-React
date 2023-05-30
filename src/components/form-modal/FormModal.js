import './FormModal.css';
import logo from '../../wizard-left-cropped.png';
import { useNavigate } from 'react-router-dom';

const FormModal = ({ fields, title, p, a, buttonText, redirectPr, redirectA }) => {

    const navigate = useNavigate();

    const nav = () => {
        navigate('/')
    };

    return (
        <div style={{ display: "flex", justifyContent: "start", margin: "auto" }}>
            <div>
                <img src={logo} style={{ marginTop: "42%", marginLeft: "20%" }}></img>
            </div>
            <div className="formmodal">
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
                            <div key={i.id}>
                                <p>{i.label}</p>
                                <input placeholder={i.placeholder} type={i.type}></input>
                            </div>
                        ))}

                        <p>Default currency</p>
                        <div>
                            <button className='dropdown'>
                                ungabunga
                            </button>
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>{p}</p>
                    <a href={redirectA} style={{ paddingTop: "0" }}>{a}</a>
                    <div className='buttons'>
                        <button className='primary-outlined' onClick={nav}>
                            <p>Cancel</p>
                        </button>
                        <button className='primary' >
                            <p>{buttonText}</p>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default FormModal;