import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        const terms = e.target.terms.checked
        console.log(name, photo, email, password, terms)
        
        createUser(email, password).then(result => {
            // console.log(result.user);
            setUser(true)
        }).catch ((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className='flex justify-center min-h-screen -mt-28 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className="text-3xl flex justify-center mt-5 font-bold">Register</h1>
                <div className="card-body">

                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label font-bold text-black">Your Name</label>
                        <input name='name' type="text" className="input" required placeholder="Enter your name" />
                        <label className="label font-bold text-black">Photo URL</label>
                        <input name='photo' type="text" className="input" required placeholder="Enter Photo URL" />
                        <label className="label font-bold text-black">Email</label>
                        <input name='email' type="email" className="input" required placeholder="Email" />
                        <label className="label font-bold text-black">Password</label>
                        <input name='password' type="password" className="input" required placeholder="Password" />
                        <label className="label mt-3">
                            <input type="checkbox" name='terms' className="checkbox checkbox-sm" />
                            Accept terms and conditions
                        </label>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='pt-4 text-center'>Already have an account? <Link className=' text-secondary font-semibold underline' to="/auth/login">Login Here</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;