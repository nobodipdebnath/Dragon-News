import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    const {image_url, title, details} = news;
    return (
        <div className='p-6 border border-gray-200 rounded-xl'>
            <img className='w-full rounded-lg object-cover' src={image_url} alt="" />
            <h2 className='mt-5 mb-2 text-2xl font-bold text-primary'>{title}</h2>
            <p className='text-base text-accent mb-8'>{details}</p>
            <div>
                <Link to={`/category/${news.category_id}`}>
                    <button className='flex items-center gap-2 text-white bg-secondary py-3.5 px-10 rounded-sm cursor-pointer'> <FaArrowLeft></FaArrowLeft><span>All news in this category</span></button>
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;