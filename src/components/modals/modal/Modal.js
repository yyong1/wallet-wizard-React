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

const Modal = ({title, leftFields, rightFields }) => {
    const [openIcon, setOpenIcon] = useState(false);

    const handleOpenIcon = () => {
        setOpenIcon(!openIcon);
    };
    const [openColor, setOpenColor] = useState(false);

    const handleOpenColor = () => {
        setOpenColor(!openColor);
    };

    return (
        <div className="modal-background">
            <div className='modal'>
                <h1>Add {title.toLowerCase()}</h1>
                <div className='body'>
                    <div className='half'>
                        <div>
                            <p>Name</p>
                            <input placeholder='category name' required></input>
                        </div>
                        <div>
                            <p>Color</p>
                            <button className='dropdown' onClick={handleOpenIcon}>
                                <img src={bus}></img>
                                {
                                    openIcon ? (
                                        <div className="icon-color-dropdown">
                                            <button className='icon-color-dropdown-item'>
                                                <img src={bus} />
                                            </button>
                                            <button className='icon-color-dropdown-item'>
                                                <img src={electricity} />
                                            </button>
                                            <button className='icon-color-dropdown-item'>
                                                <img src={rent} />
                                            </button>
                                            <button className='icon-color-dropdown-item'>
                                                <img src={food} />

                                            </button>
                                        </div>
                                    ) : null
                                }
                            </button>
                        </div>
                    </div>
                    <div className='half'>
                        <div>
                            <p>Parent category</p>
                            <input placeholder='groceries'></input>
                        </div>
                        <div>
                            <p>Color</p>
                            <button className='dropdown' onClick={handleOpenColor}>
                                <img src={palette}></img>
                                {
                                    openColor ? (
                                        <div className="icon-color-dropdown">
                                            <button className='icon-color-dropdown-item'>
                                                <img src={blue} />
                                            </button>
                                            <button className='icon-color-dropdown-item'>
                                                <img src={yellow} />
                                            </button>
                                            <button className='icon-color-dropdown-item'>
                                                <img src={green} />
                                            </button>
                                            <button className='icon-color-dropdown-item'>
                                                <img src={red} />

                                            </button>
                                        </div>
                                    ) : null
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {/* go back somehow 
                * buttons are too tall
                */}
                <div className='footer'>
                    <button className='primary-outlined'>Cancel</button>
                    <button className='primary' >Save</button>
                </div>
            </div>

        </div>
    );
}

export default Modal;