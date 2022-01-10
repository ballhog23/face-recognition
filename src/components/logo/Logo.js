import React from 'react';
import brain from './brain.png';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return (
        <Tilt className="Tilt" style={{ height: 125, width: 125 }}>
            <div>
                <img src={brain} alt='logo'
                    style={{ justifySelf: 'flex-start', maxHeight: '125px', maxWidth: '125px' }}
                />
            </div>
        </Tilt>
    )
}

export default Logo;