import './MSLayout.css';
import bus from '../../assets/icons-color/Bus.png'
import { Icon } from '@iconify/react';
import ButtonIcon from '../button-icon/ButtonIcon';
import { useState } from 'react';
import Modal from '../modals/modal/Modal';

const MSLayout = (props) => {

    var title = props.title;
    var main = props.main;
    var secondary = props.secondary;

    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState('');
    
    function toggle() {
        setModal(true);
        setVisible("none");
    }

    return (

        <div className="mslayout">
            {modal && <Modal title={title} />}
            <div className='main' style={{display:visible}}>
                <div className='title'>
                    <h1>{title}</h1>
                    <div className='buttons'>
                        {/* text here goes in two rows */}
                        {/* onClick={() => {toggle('add')}} */}
                        <button className='button-icon' onClick={toggle}>
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
            <div className="secondary" style={{display:visible}}>
                <h2>utilities</h2>
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
            </div>
        </div>
    );
}

export default MSLayout;