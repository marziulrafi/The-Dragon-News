import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen -mt-28 items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <h1 className="text-3xl flex justify-center mt-5 font-bold">Register</h1>
            <div className="card-body">

                <fieldset className="fieldset">
                    <label className="label font-bold text-black">Your Name</label>
                    <input type="text" className="input" placeholder="Enter your name" />
                    <label className="label font-bold text-black">Photo URL</label>
                    <input type="text" className="input" placeholder="Enter Photo URL" />
                    <label className="label font-bold text-black">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label font-bold text-black">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p className='pt-4 text-center'>Already have an account? <Link className=' text-secondary font-semibold underline' to="/auth/login">Login Here</Link></p>
                </fieldset>
            </div>

        </div>
    </div>
    );
};

export default Register;