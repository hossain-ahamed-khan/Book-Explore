import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card border border-[#13131326] rounded-2xl">
                    <figure className="mx-7 my-6 py-9 bg-[#F3F3F3]"><img className="w-6/12" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex flex-wrap gap-2'>
                            {
                                tags.map((tag, index) => <p key={index} className='text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] px-3 py-1 rounded-3xl'>{tag}</p>)
                            }
                        </div>
                        <h2 className="card-title text-[#131313] text-2xl font-bold mt-3 mb-1">{bookName}</h2>
                        <p className='text-[#131313CC] text-base font-medium pb-3'>By: {author}</p>
                        <div className="flex justify-between border-t-2 border-dashed pt-5 text-[#131313CC] text-base font-medium">
                            <p>{category}</p>
                            <p className='flex justify-end items-center gap-1.5'>{rating} <span><FaRegStar />
                            </span></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;