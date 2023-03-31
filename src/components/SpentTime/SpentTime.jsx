import React from 'react';

const SpentTime = ({time}) => {
    return (
        <div className='card mb-3 p-2 bg-light'>
            <h5 className='text-info' >Spent time on read : <span >{time}</span> min</h5>
            
        </div>
    );
};

export default SpentTime;