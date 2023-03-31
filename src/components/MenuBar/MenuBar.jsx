import React from 'react';
import logo from '../../assets/author/author1.png'

const MenuBar = () => {
    return (
        <div className='mb-5'>
            <nav className="p-2 navbar navbar-light bg-light justify-content-between">
                <h1 className="navbar-brand "><span className='text-danger'>Knowledge</span>  Storage</h1>
                <div className='d-flex justify-content-between'>
                    <div style={{
                        width: '40px',
                        height: '40px'
                    }}><img src={logo} className='img-fluid' alt="" /></div>

                </div>
            </nav>
        </div>
    );
};

export default MenuBar;