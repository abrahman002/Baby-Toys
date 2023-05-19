import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1684507364~exp=1684507964~hmac=3ea1f34951cddf152a864532b569fca43c214e76953b2e078f63e84c39390266" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <h1 className="text-4xl font-semibold text-center">Register now!</h1>
                        <form >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo Url" name='Photo' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm">Already have an Account Baby Toys?<Link to='/login' className='text-warning-'>
                                        Login
                                    </Link></a>
                                </label>
                                <div className="divider">OR</div>
                                <p className='text-4xl '>
                                    <FcGoogle />
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;