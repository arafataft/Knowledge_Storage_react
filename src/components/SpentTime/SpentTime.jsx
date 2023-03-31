import React from 'react';

const SpentTime = ({time}) => {
    return (
        <div className='card mb-3 p-2'>
            <h6 >Spent time on read : <span >{time}</span> min</h6>
            
        </div>
    );
};

export default SpentTime;