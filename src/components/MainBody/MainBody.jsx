import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';



const MainBody = () => {
    const [infoCards,setInfoCards]=useState([]);

    useEffect(()=>{
        fetch("../../../data.json")
        .then((res)=>res.json())
        .then((data)=>setInfoCards(data));
    },[])


    return (
        <div>
            <div className='info-container px-3'>
                {
                infoCards.map((infoCard)=>(<SingleCard infoCard={infoCard} key={infoCard.id}></SingleCard>))
                }
            </div>

        </div>
    );
};

export default MainBody;