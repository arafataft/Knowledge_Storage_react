import React from 'react';


const Bookmark = ({ titles,count }) => {
    return (
        <div className='card mb-3 p-2'>
            <h6>Bookmarked Blogs : <span>{count}</span></h6>
            <div>{titles.map((title, index) => (
                <p key={index}>{title}</p>

            ))}</div>
        </div>
    );
};

export default Bookmark;