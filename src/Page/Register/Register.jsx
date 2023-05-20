import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'



const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    // const [succes, setSuccess] = useState('');

    const handleregister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = { name, email, password, photo }
        console.log(user)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'Successfully Register',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: 'Successfully Register',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1684507364~exp=1684507964~hmac=3ea1f34951cddf152a864532b569fca43c214e76953b2e078f63e84c39390266" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <h1 className="text-4xl font-semibold text-center">Register now!</h1>
                        <form onSubmit={handleregister}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered"  required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className="btn btn-primary" />
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm">Already have an Account Baby Toys?<Link to='/login' className='text-warning-'>
                                        Login
                                    </Link></a>
                                </label>
                                <div className="divider">OR</div>
                                <button className='btn btn-outline' onClick={handleGoogleSignIn}><div className='flex items-center  text-center gap-1 text-2xl '>
                                    <div>
                                    <FcGoogle />
                                    </div>
                                    Google
                                    </div></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;