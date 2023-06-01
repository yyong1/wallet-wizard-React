import './ButtonIcon.css';
import { Icon } from '@iconify/react';


const ButtonIcon = ({string, label}) => {
    return ( 
        <button className="button-icon">
            <Icon icon={string}/>
           {label}
        </button>
     );
}
 
export default ButtonIcon;