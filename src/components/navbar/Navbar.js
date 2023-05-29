import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">

            <h2>WalletWizard</h2>
            <a>Expenses</a>
            <a>Income</a>
            <a>Categories</a>
            <a>Accounts</a>
            <a>Achievements</a>
            <div className='buttons'>
                <button className='primary' style={{marginRight:"0"}}>
                    <p>Log out</p>
                </button>
                <button className='primary-outlined'>
                    <p>Profile</p>
                </button>
            </div>
        </div>
    );
}

export default Navbar;