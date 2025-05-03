import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-3'>Find Us On</h2>

            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item justify-start"><FaFacebook/> Facebook</button>
                    <button className="btn join-item justify-start"><FaInstagram/> Instagram</button>
                    <button className="btn join-item justify-start"><RiTwitterXFill />X (Twitter)</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;