import React from 'react';
import Logo from '../logo/Logo';

const Navigation = () => {
    return (
        <nav className='pa3' style={{ display: 'flex' }}>
            <Logo />
            <p className='f3 link dim black underline pa3 pointer' style={{ marginLeft: 'auto' }}>
                Sign Out
            </p>
        </nav>
    );
}

export default Navigation;