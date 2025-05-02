import React, { Suspense } from 'react';
import Category from '../Category';

const LeftSide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Category />
            </Suspense>
        </div>
    );
};

export default LeftSide;