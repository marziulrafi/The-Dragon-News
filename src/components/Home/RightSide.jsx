import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

const RightSide = () => {
    return (
        <div className='space-y-7'>
            <SocialLogin/>
            <FindUs/>
            <QZone/>
        </div>
    );
};

export default RightSide;