import React from 'react';
import SpentTime from '../SpentTime/SpentTime';

const SideBar = ({time}) => {
    return (
        <div >
            <SpentTime time={time}></SpentTime>
            
        </div>
    );
};

export default SideBar;