import React from 'react';

const MainBody = () => {
    return (
        <div>
            <div className='info-container px-3'>
                <div className='info-card card'>
                    <div className="cover-image">
                        <img src="https://picsum.photos/800/300?random=1" className='img-fluid rounded-top' alt="" />
                    </div>

                    <div className='d-flex justify-content-between p-2'>
                        <div className="d-flex">
                            <div style={{
                                width: '50px',
                                borderRadius: '50px !important',
                                height: '70px'

                            }} >
                                <img className='rounded-circle img-fluid px-1' src="https://picsum.photos/500/500?random=2" alt="" />
                            </div>
                            <div className="">
                                <h6>Sakib Al Hasan</h6>
                                <p className='text-muted'>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div className='d-flex text-muted'>
                            <p>5min need</p>
                            <span>
                                
                            </span>
                        </div>

                        
                    </div>

                    <div className='px-2'>
                        <h3>How become number One All rounder</h3>
                        <a href="/read">Make as read</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MainBody;