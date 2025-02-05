import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks, saveWishlists } from "../../utility/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId == idInt);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleRead = () => {
        saveReadBooks(idInt);
        toast("Added to read list");
    }

    const handleWishlist = () => {
        saveWishlists(idInt);
        toast("Added to wishlist");
    }

    return (
        <>
            <div className="flex gap-12 mt-8 mb-4">
                <div className="w-1/2 bg-[#1313130D] rounded-2xl">
                    <img className="w-9/12 mx-auto py-16" src={image} alt="" />
                </div>

                <div className="w-1/2">
                    <h1 className="text-[#131313] text-4xl font-bold">{bookName}</h1>
                    <p className="text-[#131313CC] text-xl font-medium my-4">By: {author}</p>
                    <p className="text-[#131313CC] text-xl font-medium py-3 border-y-2">{category}</p>
                    <p className="text-[#131313B3] text-base font-normal py-6"><span className="text-[#131313]">Review:</span> {review}</p>
                    <div className="text-[#131313] text-base font-bold flex gap-3 py-4">
                        <span>Tag</span>
                        <span className='flex flex-wrap gap-2'>
                            {
                                tags.map((tag, index) => <span key={index} className='text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] px-3 py-1 rounded-3xl'>#{tag}</span>)
                            }
                        </span>
                    </div>

                    <div className="border-t-2 text-[#131313B3] text-base font-normal pt-4">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pr-12 pb-2">Number of Pages:</td>
                                    <td className="text-[#131313] text-base font-semibold pb-2">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="pr-12 pb-2">Publisher:</td>
                                    <td className="text-[#131313] text-base font-semibold pb-2">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="pr-12 pb-2">Year of Publishing:</td>
                                    <td className="text-[#131313] text-base font-semibold pb-2">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="pr-12 pb-2">Rating:</td>
                                    <td className="text-[#131313] text-base font-semibold pb-2">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="pt-4">
                        <button onClick={handleRead} className="text-[#131313] text-lg font-semibold px-4 py-2 border rounded-lg mr-4">Read</button>
                        <button onClick={handleWishlist} className="text-white bg-[#50B1C9] text-lg font-semibold px-4 py-2 border rounded-lg">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default BookDetails;