import React, {useEffect, useState} from 'react';
import axios from "axios";

const Catyara = () => {
    const [cats, setCats] = useState([])
    const [cat, setCat] = useState({})
    useEffect(() => {
        axios("https://api.thecatapi.com/v1/breeds")
            .then(res => setCats(res.data))
    }, [])
    const handleChange = (e) => {
        const filteredCats = cats.find(item => item.id === e.target.value)
        setCat(filteredCats)
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option selected disabled>Выберите кошару</option>
                {
                    cats.map((el) => (
                        <option key={el.id} value={el.id}>{el.name}</option>
                    ))
                }
            </select>
            {
                cat.id &&
                <div>
                    <img src={cat.image.url} height={350} width={350}/>
                    <p>{cat.name}</p>
                    <p>{cat.description}</p>
                    <p>{cat.temperament}</p>
                    <p>{cat.weight?.metric}</p>
                    <p>{cat.origin}</p>
                    <p>{cat.alt_names}</p>
                    <p>{cat.adaptability}</p>
                    <p>{cat.energy_level}</p>
                </div>
            }
        </div>
    )
}
export default Catyara





