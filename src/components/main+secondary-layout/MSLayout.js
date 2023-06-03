import './MSLayout.css';
import { Icon } from '@iconify/react';
import ButtonIcon from '../button-icon/ButtonIcon';
import { useState } from 'react';
import Modal from '../modals/modal/Modal';
import '../modals/modal/Modal.css'

const MSLayout = (props) => {

    var title = props.title;
    var main = props.main;
    var secondary = props.secondary;

    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState('');

    function toggle(modal, visible) {
        setModal(modal);
        setVisible(visible);
    }

    return (

        <div className="mslayout">
            {modal &&
                <Modal title={title} toggle={toggle}/>}
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
            </div>
        </div>
    );
}

export default MSLayout;