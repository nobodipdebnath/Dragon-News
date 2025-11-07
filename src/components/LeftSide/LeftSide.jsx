import{ Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftSide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftSide;
