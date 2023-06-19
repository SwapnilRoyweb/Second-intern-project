import React from 'react';
import { Outlet } from 'react-router-dom';


const SecurityLayout = () => {
    return (
        <div className='m-32  rounded-3xl'>
            <Outlet></Outlet>
        </div>
    );
};

export default SecurityLayout;