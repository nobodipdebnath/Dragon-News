import React from 'react';
import banner from '../../assets/bg.png'

const Banner = () => {
    return (
        <div className='mt-5 '>
            <img className='w-full object-cover rounded-sm' src={banner} alt="" />
        </div>
    );
};

export default Banner;