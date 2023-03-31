import React from 'react';
import SpentTime from '../SpentTime/SpentTime';
import Bookmark from '../Bookmark/Bookmark';

const SideBar = ({time,titles,count}) => {
    return (
        <div >
            <SpentTime time={time}></SpentTime>
            <Bookmark titles={titles} count={count}></Bookmark>
        </div>
    );
};

export default SideBar;