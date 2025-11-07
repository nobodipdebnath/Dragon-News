import React from 'react';
import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classes from '../../assets/class.png'

const QZone = () => {
    return (
        <div className='mt-3 py-4 px-2 bg-gray-200 rounded-sm'>
            <h2 className='text-xl font-bold text-primary'>Q-Zone</h2>
            <div className='grid grid-cols-1 gap-2 w-full mx-auto'>
                <img className='w-full object-cover' src={swimming} alt="" />
                <img className='w-full object-cover' src={playground} alt="" />
                <img className='w-full object-cover' src={classes} alt="" />
            </div>
        </div>
    );
};

export default QZone;