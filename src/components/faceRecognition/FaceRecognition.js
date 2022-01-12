import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center-1 ma'>
            <div className='center absolute mt2' style={{width:'300px'}}>
                <img id='inputimage' src={imageUrl} alt='user submitted' width="auto" height="auto" />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;