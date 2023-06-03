import { useState } from 'react';
import cash from '../../assets/icons-color/Cash.png';
import card from '../../assets/icons-color/Magnetic Card.png';
import savings from '../../assets/icons-color/Money Box.png';
import bus from '../../assets/icons-color/Bus.png';
import electricity from '../../assets/icons-color/Electricity.png';
import rent from '../../assets/icons-color/Rent.png';
import food from '../../assets/icons-color/Food.png';
import paycheck from '../../assets/icons-color/Check Book.png';
import bonus from '../../assets/icons-color/Get Cash.png';
import { Icon } from '@iconify/react';
import './Accounts.css';
import Modal from '../modals/modal/Modal';
import wizard from '../../small-wizard.png';

const Accounts = () => {
    const [main, setMain] = useState([
        { id: 0, label: "cash", icon: cash },
        { id: 1, label: "card", icon: card },
        { id: 2, label: "savings", icon: savings }
    ])

    const [expenses, setExpenses] = useState([
        { id: 0, label: 'transport', icon: bus },
        { id: 1, label: 'utilities', icon: electricity },
        { id: 2, label: 'rent', icon: rent },
        { id: 3, label: 'food', icon: food }
    ])

    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState('');

    function toggle(modal, visible) {
        setModal(modal);
        setVisible(visible);
    }

    const title = 'Accounts';
    const single = 'account';
    return (
        <div className="accounts">
            {modal && <Modal title={title} toggle={toggle} single={single} placeholder='cash'/>}
            <div className='main' style={{ display: visible }}>
                <div className='title'>
                    <h1>{title}</h1>
                    <div className='buttons'>
                        {/* text here goes in two rows */}
                        <button className='button-icon' onClick={()=>{toggle(true, 'none')}}>
                            <Icon icon="pixelarticons:plus" />
                            Add {title.toLowerCase()}
                        </button>
                    </div>
                </div>
                <div className='main-items' style={{borderRadius:"10px"}}>
                    <div className='card-list'>
                        {main.map((i) => (
                            <div key={i.id} className='card' style={{ width: "15%" }}>
                                <img src={i.icon}></img>
                                <p>{i.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='secondary' style={{display:visible}}>
                <h1>Cash</h1>
                <div className='secondary-items'>
                    <div className='half'>
                        <div className='status'>
                            <p>expenses:</p>
                            <div>
                                <p>Started with:</p>
                                <h2>300</h2>
                            </div>
                        </div>
                        <div className='list-item' style={{ background: "#dadefa" }}>
                            <div className='icon-label'>
                                <img src={food} />
                                <p >food</p>
                            </div>
                            <p>55</p>
                        </div>
                        <div className='list-item' style={{ background: "#FCD7D7" }}>
                            <div className='icon-label'>
                                <img src={bus} />
                                <p >transport</p>
                            </div>
                            <p>20</p>
                        </div>
                        <div className='total'>
                            <h2>total</h2>
                            <h2>75</h2>
                        </div>
                    </div>
                    <div className='half'>
                        <div className='status'>
                            <p>income:</p>
                            <div>
                                <p>Current amount:</p>
                                <h2>1025</h2>
                            </div>
                        </div>
                        <div className='list-item' style={{ background: "#D7D8E7" }}>
                            <div className='icon-label'>
                                <img src={paycheck} />
                                <p >paycheck</p>
                            </div>
                            <p>700</p>
                        </div>
                        <div className='list-item' style={{ background: "#E2B6B6" }}>
                            <div className='icon-label'>
                                <img src={bonus} />
                                <p >bonus</p>
                            </div>
                            <p>69</p>
                        </div>
                        <div className='total'>
                            <h2>total</h2>
                            <h2>800</h2>
                        </div>
                    </div>
                </div>
                <div className='wizard'>
                    <img src={wizard}/>
                </div>
            </div>
        </div>
    );
}

export default Accounts;