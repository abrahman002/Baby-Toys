import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { logOut, auth } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => { error })
    }

    const menuBar = <>
        <li><Link>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        {auth.currentUser ? <>
            <li><Link to='/addatoy'>Add A Toys</Link></li>
            <li><Link to='/mytoys'>My Toys</Link></li>
            <li><button onClick={handleLogOut}>SignOut</button></li>
        </> :
            <li><Link to='/login'>Login</Link></li>

        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <img style={{ width: '80px', height: '80px' }} src="https://static.vecteezy.com/system/resources/previews/004/657/170/original/baby-shop-logo-with-cute-baby-face-illustration-free-vector.jpg" alt="" />
                <a className=" text-xl ">Baby Toys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    auth.currentUser && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full" title={auth.currentUser.displayName}>
                            <img src={auth.currentUser?.photoURL} />
                        </div>
                    </label>
                }



            </div>
        </div>
    );
};

export default Navbar;