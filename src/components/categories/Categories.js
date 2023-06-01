import MSLayout from "../main+secondary-layout/MSLayout";
import bus from '../../assets/icons-color/Bus.png';
import electricity from '../../assets/icons-color/Electricity.png';
import rent from '../../assets/icons-color/Rent.png';
import food from '../../assets/icons-color/Food.png';
import water from '../../assets/icons-color/Water.png';
import internet from '../../assets/icons-color/Internet.png';
import phone from '../../assets/icons-color/iPhone SE.png';
import netflix from '../../assets/icons-color/Netflix.png';
import { useState } from "react";


const Categories = () => {

    const [main, setMain] = useState([
        { id: 0, label: 'transport', icon: bus },
        { id: 1, label: 'utilities', icon: electricity },
        { id: 2, label: 'rent', icon: rent },
        { id: 3, label: 'food', icon: food }

    ])

    const [secondary, setSecondary] = useState([
        { id: 0, label: 'electricity', icon: electricity },
        { id: 1, label: 'water', icon: water },
        { id: 2, label: 'internet', icon: internet },
        { id: 3, label: 'phone', icon: phone },
        { id: 4, label: 'subscriptions', icon: netflix },
    ])

    return (
        <div className="categories">
            <MSLayout title="Categories" main={main} secondary={secondary}></MSLayout>
        </div>
    );
}

export default Categories;