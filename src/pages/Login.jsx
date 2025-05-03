import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen -mt-28 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className="text-3xl flex justify-center mt-5 font-bold">Login Now</h1>
                <div className="card-body">

                    <fieldset className="fieldset">
                        <label className="label font-bold text-black">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label font-bold text-black">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='pt-4 text-center'>Don't have an account? <Link className=' text-secondary font-semibold underline' to="/auth/register">Register Here</Link></p>
                    </fieldset>
                </div>

            </div>
        </div>
    );
};

export default Login;