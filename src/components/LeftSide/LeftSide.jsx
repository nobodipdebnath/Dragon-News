import{ Suspense } from 'react';
import Categories from '../Categories/Categories';
import Sports from '../Sprots/Sports';

const LeftSide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Categories />
            </Suspense>
            <Sports></Sports>
        </div>
    );
};

export default LeftSide;
