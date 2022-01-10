import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className='flex flex-column justify-center lh-copy pa2 form-container'>
            <label className='flex flex-column f4' htmlFor='photo-url'>
                Enter a URL below to allow the Big Brain to detect faces!
            </label>
            <div className='text-btn-container mt3 center center-1'>
                <div className='pa2 br3 shadow-5 text-btn-holder'>
                <input type='text' name='photo-url' placeholder='https://imageurl.com/image'
                    className='w-70 f4 photo-url pa2'
                />
                <button className='w-30 grow f4 link pa2 dib white bg-light-pink detect'>
                    Detect
                </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;