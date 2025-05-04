import React, { Suspense } from 'react';
import Category from '../Category';

const LeftSide = () => {
    return (
        <div>
            <Suspense>
                <Category />
            </Suspense>
        </div>
    );
};

export default LeftSide;