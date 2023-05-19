import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684506145~exp=1684506745~hmac=bd4a89f35b0f3270a4a07c62dd661059fe4ed149ed14ee8af395fc6c5ae1df0a" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-semibold text-center">Login now!</h1>
                        <form >
                            <div className="card-body">
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-xl">New To Baby Toys?<Link to='/register' className='text-warning-'>
                                        Register
                                    </Link></a>
                                </label>
                                <div className="divider">OR</div>
                                   <p className='text-4xl '>
                                    <FcGoogle/>
                                   </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;