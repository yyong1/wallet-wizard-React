import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    /**
     * surely, there is a better way, but I simply cannot be bothered rn
     * href also works
     */
    const navigate = useNavigate();

    const homepage = () => {
        navigate('/');
    };

    const expenses = () => {
        navigate('/expenses');
    };

    const income = () => {
        navigate('/income');
    };

    const categories = () => {
        navigate('/categories');
    };

    const accounts = () => {
        navigate('/accounts');
    };

    const achievements = () => {
        navigate('/achievements');
    };

    return (
        <div className="navbar">
            <h2 onClick={homepage}>
                WalletWizard
            </h2>
            {/* <div className='not-title'> */}
                <div className='items'>
                    <a onClick={expenses}>Expenses</a>
                    <a onClick={income}>Income</a>
                    <a onClick={categories}>Categories</a>
                    <a onClick={accounts}>Accounts</a>
                    <a onClick={achievements}>Achievements</a>
                </div>
                <div className='buttons'>
                    <button onClick={homepage} className='primary' style={{ marginRight: "0" }}>
                        Log out
                    </button>
                    <button className='primary-outlined'>
                        Profile
                    </button>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Navbar;