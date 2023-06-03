import bus from '../../assets/icons-color/Bus.png';
import electricity from '../../assets/icons-color/Electricity.png';
import rent from '../../assets/icons-color/Rent.png';
import food from '../../assets/icons-color/Food.png';
import water from '../../assets/icons-color/Water.png';
import internet from '../../assets/icons-color/Internet.png';
import phone from '../../assets/icons-color/iPhone SE.png';
import netflix from '../../assets/icons-color/Netflix.png';
import gas from '../../assets/icons-color/Gas Station.png';
import groceries from '../../assets/icons-color/Grocery Bag.png';
import { useState } from "react";
import Modal from "../modals/modal/Modal";
import { Icon } from "@iconify/react";
import './Categories.css';
import wizard from '../../small-wizard.png';

const Categories = () => {

    const title = 'Categories';
    const single = 'category';

    const [main, setMain] = useState([
        { id: 0, label: 'Transport', icon: bus },
        { id: 1, label: 'Utilities', icon: electricity },
        { id: 2, label: 'Rent', icon: rent },
        { id: 3, label: 'Food', icon: food }

    ])

    const [secondary, setSecondary] = useState([
        { id: 0, label: 'Power', icon: electricity, parent: main[1].label },
        { id: 1, label: 'Water', icon: water, parent: main[1].label },
        { id: 2, label: 'Internet', icon: internet, parent: main[1].label },
        { id: 3, label: 'Phone', icon: phone, parent: main[1].label },
        { id: 4, label: 'Netflix', icon: netflix, parent: main[1].label },
        { id: 5, label: 'Gas', icon: gas, parent: main[0].label },
        // { id: 6, label: 'Parking', icon: parking, parent: main[0].label },
        { id: 7, label: 'Groceries', icon: groceries, parent: main[3].label },
        { id: 8, label: 'Takeout', icon: food, parent: main[3].label }
    ])

    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState('');

    function toggle(modal, visible) {
        setModal(modal);
        setVisible(visible);
    }

    const [secondaryTitle, setSecondaryTitle] = useState('Utilities');

    function changeTitle(secondaryTitle) {
        setSecondaryTitle(secondaryTitle);
    }

    return (

        <div className="categories">
            {/* <MSLayout title="Categories" main={main} secondary={secondary}></MSLayout> */}
            {modal &&
                <Modal title={title} toggle={toggle} single={single} placeholder='groceries' />}
            {console.log(secondary)}
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
                            <button key={i.id} className='card' onClick={() => { changeTitle(i.label) }}>
                                <img src={i.icon}></img>
                                <p>{i.label}</p>
                            </button>
                        ))}

                    </div>
                </div>
            </div>
            <div className="secondary" style={{ display: visible }}>
                <h2>{secondaryTitle}</h2>
                <div className='secondary-items'>
                    <div className='card-list'>
                        {secondary.filter(i => i.parent === secondaryTitle).map(j => (
                            <div key={j.id} className='card'>
                                <img src={j.icon}></img>
                                <p>{j.label}</p>
                            </div>))
                        }
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