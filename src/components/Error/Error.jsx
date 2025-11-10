import React from 'react';
import image from '../../assets/404.png'
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center flex-col items-center h-screen'>
            <img src={image} alt="" />
            <div>
                <button onClick={() => navigate(-1)} className='py-3 px-10 bg-secondary rounded-sm text-white font-semibold cursor-pointer'>Go Back</button>
            </div>
        </div>
    );
};

export default Error;