import { NavLink } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <>
            <div className="navbar mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                            <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <h1 className="text-[#131313] text-3xl font-bold">Book Explore</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-3">
                        <li className="mr-2"><NavLink to="/">Home</NavLink></li>
                        <li className="mr-2"><NavLink to="/listed-books">Listed Books</NavLink></li>
                        <li className=""><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-3 bg-[#23BE0A] text-white ">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </>
    );
};

export default Header;