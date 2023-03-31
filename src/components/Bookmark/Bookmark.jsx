import React from 'react';


const Bookmark = ({ titles,count }) => {
    return (
        <div className='card mb-3 p-2 bg-light'>
            <h6>Bookmarked Blogs : <span>{count}</span></h6>
            <div >{titles.map((title, index) => (
                <p className='bg-body p-1' key={index}>{title}</p>

            ))}</div>
        </div>
    );
};

export default Bookmark;