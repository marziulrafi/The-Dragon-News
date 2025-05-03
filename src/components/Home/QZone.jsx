import React from 'react';
import swim from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import play from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className="font-bold mb-5">Q - Zone</h2>

            <div className='space-y-5'>
                <img src={swim} alt="" />
                <img src={classroom} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default QZone;