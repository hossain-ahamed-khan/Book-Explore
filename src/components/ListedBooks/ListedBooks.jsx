import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <div className="w-full h-24 my-6 bg-[#1313130D] rounded-2xl flex items-center justify-center">
                <h1 className="text-[#131313] text-3xl font-bold text-center ">Books</h1>
            </div>

            <div className="mt-6 mb-12 flex justify-center items-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] hover:bg-[#3e8f32] text-white">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content text-slate-900 bg-[#f7f6f6] z-[1] rounded-box w-48">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div role="tablist" className="tabs tabs-lifted tabs-lg mb-6">
                <Link onClick={() => setTabIndex(0)} to="" role="tab" className={`tab ${tabIndex === 0 ? 'tab-active active' : ''}`}>Read Books</Link>
                <Link onClick={() => setTabIndex(1)} to={`wishlist-books`} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active active' : ''}`}>Wishlist Books</Link>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default ListedBooks;