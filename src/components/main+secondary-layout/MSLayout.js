import './MSLayout.css';
import bus from '../../assets/icons-color/Bus.png'
import { Icon } from '@iconify/react';
import ButtonIcon from '../button-icon/ButtonIcon';

const MSLayout = (props) => {

    var title = props.title;
    var main = props.main;
    var secondary = props.secondary;
    return (
        <div className="mslayout">
            <div className='main'>
                <div className='title'>
                    <h1>{title}</h1>
                    <div className='buttons'>
                        {/* <button className='secondary'>
                            Add {title}
                        </button> */}
                        {/* text here goes in two rows */}
                        <ButtonIcon string="pixelarticons:plus" label={"Add " + title} />
                        <ButtonIcon string="pixelarticons:edit-box" label={"Edit " + title} />
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
            <div className="secondary">
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