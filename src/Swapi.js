import React, {useState,useEffect} from 'react';
import axios from "axios";

const Swapi = () => {
    const [id,setId] = useState('1')
    const [people,setPeople] = useState({})
    const handleInput = (e) =>{
        setId(Math.min(e.target.value,83))
    }

    useEffect(() =>{
        axios(`https://swapi.dev/api/people/${id}`)
            .then(res=>setPeople(res.data))

    },[id])

    const dnGet = () =>{
        setId(+id-1)
        if (+id===1){
            setId(83)
        }
    }
    const upGet = () =>{
        setId(+id+1)
        if (+id===83){
            setId(1)
        }
    }
    return (
        <div key={people.id}>
            <button onClick={dnGet}>-</button>
            <input type="number" onChange={handleInput} value={id}/>
            <button onClick={upGet}>+</button>
            <div>{people.name}</div>
        </div>
    );
};

export default Swapi;