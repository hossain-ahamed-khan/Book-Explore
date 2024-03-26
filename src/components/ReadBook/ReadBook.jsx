import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadBook = ({ readBook }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = readBook;
    return (
        <div>
            <div className="card card-side border border-[#13131326] mb-6">
                <figure className='bg-[#1313130D] w-60'><img className='w-32 h-44' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-[#131313] text-2xl font-bold">{bookName}</h1>
                    <p className='text-[#131313CC] text-base font-medium'>By: {author}</p>
                    <div className="text-[#131313] text-base font-bold flex items-center gap-3 py-4">
                        <span>Tag</span>
                        <span className='flex flex-wrap gap-2'>
                            {
                                tags.map((tag, index) => <span key={index} className='text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] px-3 py-1 rounded-3xl'>#{tag}</span>)
                            }
                        </span>
                    </div>
                    <p className='flex items-center gap-2 text-[#13131399] text-base font-normal'><SlLocationPin />Year of Publishing: {yearOfPublishing}</p>
                    <div className='w-1/2 flex justify-start'>
                        <p className='flex items-center gap-2 text-[#13131399] text-base font-normal'><HiOutlineUsers />Publisher: {publisher}</p>
                        <p className='flex items-center gap-2 text-[#13131399] text-base font-normal'><MdOutlineFindInPage />Page {totalPages}</p>
                    </div>
                    <div className="card-actions justify-start gap-7 mt-3">
                        <button className="bg-[#328EFF26] text-[#328EFF] text-base font-normal px-6 py-2 rounded-3xl">Category: {category}</button>
                        <button className="bg-[#FFAC3326] text-[#FFAC33] text-base font-normal px-6 py-2 rounded-3xl">Rating: {rating}</button>
                        <button className=" bg-[#23BE0A] text-white text-base font-normal px-6 py-2 rounded-3xl">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

ReadBook.propTypes = {
    readBook: PropTypes.object
}

export default ReadBook;