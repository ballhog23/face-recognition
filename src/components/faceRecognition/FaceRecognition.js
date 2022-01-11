import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center-1 ma'>
            <div className='center absolute mt2'>
                <img src={imageUrl} alt='user submitted' width="500px" height="auto" />
            </div>
        </div>
    )
}

export default FaceRecognition;