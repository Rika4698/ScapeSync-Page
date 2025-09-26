import React from 'react';

const Navbar = ({children}) => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 '>
           {children} 
        </div>
    );
};

export default Navbar;