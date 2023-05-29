import './FormModal.css';
import logo from '../../wizard-left-cropped.png';

const FormModal = () => {
    return (
        <div style={{display:"flex", justifyContent:"start", margin:"auto"}}>
             <div>
                <img src={logo} style={{marginTop:"42%", marginLeft:"20%"}}></img>
            </div>
            <div className="formmodal">
                <div className='title'>
                    <h1 style={{ color: "var(--ww-white)", padding: "3%" }}>Registration</h1>
                </div>
                <form>
                    <div className='form'>
                        <p>Name</p>
                        <input placeholder='name' />
                        <p>Email</p>
                        <input placeholder='name@email.com' />
                        <p>Password</p>
                        <input type="password" placeholder='********' />
                        <p>Default currency</p>
                        <div>
                            <button className='dropdown'>
                                ungabunga
                            </button>
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>Already have an account?</p>
                    <a style={{paddingTop:"0"}}>Log in</a>
                    <div className='buttons'>
                        <button className='primary-outlined'>
                            <p>Cancel</p>
                        </button>
                        <button className='primary' >
                            <p>Save</p>
                        </button>
                    </div>
                </form>
            </div>
           
        </div>
    );
}

export default FormModal;