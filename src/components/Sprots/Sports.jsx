import React from 'react';
import { IoCalendarClearOutline } from "react-icons/io5";
import sport1 from '../../assets/left-1.png'
import sport2 from '../../assets/left-2.png'
import sport3 from '../../assets/left-3.png'

const Sports = () => {
    return (
        <div className='grid grid-cols-1 gap-5 mt-5'>
            <div>
                <img className='w-full' src={sport1} alt="" />
                <p className='text-2xl font-bold text-primary py-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center gap-5'>
                    <h3 className='text-primary text-lg font-semibold'>Sports</h3>
                    <div className='flex items-center gap-2 text-accent text-lg font-medium'>
                        <IoCalendarClearOutline></IoCalendarClearOutline>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-full' src={sport2} alt="" />
                <p className='text-2xl font-bold text-primary py-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center gap-5'>
                    <h3 className='text-primary text-lg font-semibold'>Sports</h3>
                    <div className='flex items-center gap-2 text-accent text-lg font-medium'>
                        <IoCalendarClearOutline></IoCalendarClearOutline>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <img className='w-full' src={sport3} alt="" />
                <p className='text-2xl font-bold text-primary py-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center gap-5'>
                    <h3 className='text-primary text-lg font-semibold'>Sports</h3>
                    <div className='flex items-center gap-2 text-accent text-lg font-medium'>
                        <IoCalendarClearOutline></IoCalendarClearOutline>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;