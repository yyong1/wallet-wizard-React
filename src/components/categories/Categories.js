import bus from '../../assets/icons-color/Bus.png';
import electricity from '../../assets/icons-color/Electricity.png';
import rent from '../../assets/icons-color/Rent.png';
import food from '../../assets/icons-color/Food.png';
import water from '../../assets/icons-color/Water.png';
import internet from '../../assets/icons-color/Internet.png';
import phone from '../../assets/icons-color/iPhone SE.png';
import netflix from '../../assets/icons-color/Netflix.png';
import { useState } from "react";
import Modal from "../modals/modal/Modal";
import { Icon } from "@iconify/react";
import './Categories.css';
import wizard from '../../small-wizard.png';

const Categories = () => {

    const title = 'Categories';
    const single = 'category';

    const [main, setMain] = useState([
        { id: 0, label: 'transport', icon: bus },
        { id: 1, label: 'utilities', icon: electricity },
        { id: 2, label: 'rent', icon: rent },
        { id: 3, label: 'food', icon: food }

    ])

    const [secondary, setSecondary] = useState([
        { id: 0, label: 'power', icon: electricity },
        { id: 1, label: 'water', icon: water },
        { id: 2, label: 'internet', icon: internet },
        { id: 3, label: 'phone', icon: phone },
        { id: 4, label: 'netflix', icon: netflix },
        { id: 5, label: 'power', icon: electricity },
        { id: 6, label: 'water', icon: water },
        { id: 7, label: 'internet', icon: internet },
    ])

    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState('');

    function toggle(modal, visible) {
        setModal(modal);
        setVisible(visible);
    }

    return (
        <div className="categories">
            {/* <MSLayout title="Categories" main={main} secondary={secondary}></MSLayout> */}
            {modal &&
                <Modal title={title} toggle={toggle} single={single} placeholder='groceries' />}
            <div className='main' style={{ display: visible }}>
                <div className='title'>
                    <h1>{title}</h1>
                    <div className='buttons'>
                        {/* text here goes in two rows */}
                        <button className='button-icon' onClick={() => { toggle(true, 'none') }}>
                            <Icon icon="pixelarticons:plus" />
                            Add {title.toLowerCase()}
                        </button>
                        <button className='button-icon' >
                            <Icon icon="pixelarticons:edit-box" />
                            Edit {title.toLowerCase()}
                        </button>
                    </div>
                </div>
                <div className='main-items'>
                    <div className='card-list'>
                        {main.map((i) => (
                            <div key={i.id} className='card'>
                                <img src={i.icon}></img>
                                <p>{i.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="secondary" style={{ display: visible }}>
                <h2>{ }</h2>
                <div className='secondary-items'>
                    <div className='card-list'>
                        {secondary.map((i) => (
                            <div key={i.id} className='card'>
                                <img src={i.icon}></img>
                                <p>{i.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='wizard'>
                    <img src={wizard} />
                </div>
            </div>
        </div>
    );
}

export default Categories;