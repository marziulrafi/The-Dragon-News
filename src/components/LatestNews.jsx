import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex p-3 items-center gap-3 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

            <Marquee className='flex gap-5' pauseOnHover={true} speed={80}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati?</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati?</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;