import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')

    const { login } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('')

        login(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(`${location.state ? location.state : "/"}`)
            }).catch((error) => {
                setErrorMessage(error.message);
            });
    }

    return (
        <div className='flex justify-center min-h-screen -mt-28 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className="text-3xl flex justify-center mt-5 font-bold">Login Now</h1>
                <div className="card-body">

                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label font-bold text-black">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label font-bold text-black">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='pt-4 text-center'>Don't have an account? <Link className=' text-secondary font-semibold underline' to="/auth/register">Register Here</Link></p>
                    </form>

                    <div>
                        {
                            errorMessage && <p className='text-red-600 font-bold p-5'>{errorMessage}</p>
                        }
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;