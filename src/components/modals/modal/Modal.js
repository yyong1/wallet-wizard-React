import './Modal.css'
import palette from '../../../assets/icons-color/Palette.png';
import bus from '../../../assets/icons-color/Bus.png';
import electricity from '../../../assets/icons-color/Electricity.png';
import rent from '../../../assets/icons-color/Rent.png';
import food from '../../../assets/icons-color/Food.png';
import { useState } from 'react';
import blue from '../../../assets/blue.png';
import red from '../../../assets/red.png';
import yellow from '../../../assets/yellow.png';
import green from '../../../assets/green.png';

const Modal = ({ title, toggle, single, placeholder }) => {
    const [openIcon, setOpenIcon] = useState(false);

    const handleOpenIcon = () => {
        setOpenIcon(!openIcon);
    };
    const [openColor, setOpenColor] = useState(false);

    const handleOpenColor = () => {
        setOpenColor(!openColor);
    };

    const [icons, setIcons] = useState([
        { id: 0, src: bus, alt: "bus" },
        { id: 1, src: electricity, alt: "electricity" },
        { id: 2, src: rent, alt: "rent" },
        { id: 3, src: food, alt: "food" },
    ]);

    const [colors, setColors] = useState([
        { id: 0, src: blue, alt: "blue" },
        { id: 1, src: yellow, alt: "yellow" },
        { id: 2, src: red, alt: "red" },
        { id: 3, src: green, alt: "green" },
    ]);

    return (
        <div className="modal-background">
            <div className='modal'>
                <h1>Add {single}</h1>
                <div className='body'>
                    <div className='half'>
                        <div className='field'>
                            <p>Name *</p>
                            <input placeholder= {single + ' name'} required></input>
                        </div>
                        <div className='field'>
                            <p>Icon</p>
                            <button className='dropdown' onClick={handleOpenIcon}>
                                <img src={bus} alt='bus' />
                                {
                                    openIcon ? (
                                        <div className="icon-color-dropdown">
                                            {icons.map((i) => (
                                                <div key={i.id}>
                                                    <button className='icon-color-dropdown-item'>
                                                        <img src={i.src} alt={i.alt} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null
                                }
                            </button>
                        </div>
                    </div>
                    <div className='half'>
                        <div className='field'>
                            <p>Parent {single}</p>
                            <input placeholder={placeholder}/>
                        </div>
                        <div className='field'>
                            <p>Color</p>
                            <button className='dropdown' onClick={handleOpenColor}>
                                <img src={palette}></img>
                                {
                                    openColor ? (
                                        <div className="icon-color-dropdown">
                                            {colors.map((i) => (
                                                <button className='icon-color-dropdown-item' key={i.id}>
                                                    <img src={i.src} alt={i.alt} />
                                                </button>
                                            ))}
                                        </div>
                                    ) : null
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {/* 
                * buttons are too tall
                */}
                <div className='footer'>
                    <button className='primary-outlined' onClick={()=>{toggle(false, '')}}>Cancel</button>
                    <button className='primary' onClick={()=>{toggle(false, '')}}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;