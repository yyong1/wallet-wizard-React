import './Homepage.css'
import { useState } from 'react';

const Homepage = () => {
    const [name, setName] = useState('firstName');
    const handleClick=()=>{
        setName('secondName');
    }

    return (
        <div className="homepage">
            <p>homepage</p>
            <h1>imagine an image</h1>
            <button className='primary' style={{width:"100px", height:"100px"}} onClick={handleClick}>cwick me</button>
            <p>{name}</p>
        </div>
    );
}

export default Homepage;

