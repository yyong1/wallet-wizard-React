import { useState } from 'react';
import cash from '../../assets/icons-color/Cash.png';
import card from '../../assets/icons-color/Magnetic Card.png';
import savings from '../../assets/icons-color/Money Box.png';
import bus from '../../assets/icons-color/Bus.png';
import electricity from '../../assets/icons-color/Electricity.png';
import rent from '../../assets/icons-color/Rent.png';
import food from '../../assets/icons-color/Food.png';
import { Icon } from '@iconify/react';
import './Accounts.css';
import Modal from '../modals/modal/Modal';

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
    return (
        <div className="accounts">
            {modal && <Modal title={title} toggle={toggle}/>}
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
                <div className='main-items'>
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
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center", marginLeft:"auto", marginRight:"auto"  }}>
                    <div className='half'>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", margin: "3%", alignItems: "end" }}>
                            <p>expenses:</p>
                            <div>
                                <p>Started with:</p>
                                <h2>300</h2>
                            </div>
                        </div>
                        <div className='list-item' style={{ background: "#dadefa" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "90%", margin: "1%", alignItems: "center" }}>
                                <img src={bus} />
                                <p style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "3%" }}>label</p>
                            </div>
                            <p style={{ marginRight: "10%" }}>69</p>
                        </div>
                        <div className='list-item' style={{ background: "#FCD7D7" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "90%", margin: "1%", alignItems: "center" }}>
                                <img src={bus} />
                                <p style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "3%" }}>label</p>
                            </div>
                            <p style={{ marginRight: "10%" }}>69</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", margin: "3%", alignItems: "end" }}>
                            <h2>total</h2>
                            <h2 style={{paddingRight:"13%"}}>600</h2>
                        </div>
                    </div>
                    <div className='half'>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", margin: "3%", alignItems: "end"}}>
                            <p>expenses:</p>
                            <div>
                                <p>Started with:</p>
                                <h2>300</h2>
                            </div>
                        </div>
                        <div className='list-item' style={{ background: "#dadefa" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "90%", margin: "1%", alignItems: "center" }}>
                                <img src={bus} />
                                <p style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "3%" }}>label</p>
                            </div>
                            <p style={{ marginRight: "10%" }}>69</p>
                        </div>
                        <div className='list-item' style={{ background: "#FCD7D7" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "90%", margin: "1%", alignItems: "center" }}>
                                <img src={bus} />
                                <p style={{ marginBottom: "auto", marginTop: "auto", marginLeft: "3%" }}>label</p>
                            </div>
                            <p style={{ marginRight: "10%" }}>69</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", margin: "3%", alignItems: "end" }}>
                            <h2>total</h2>
                            <h2 style={{paddingRight:"13%"}}>600</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accounts;