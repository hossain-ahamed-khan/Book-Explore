import PropTypes from 'prop-types';

const ReadBook = ({ readBook }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = readBook;
    return (
        <div>
            <div className="card card-side border border-[#13131326] mb-6">
                <figure className='bg-[#1313130D] w-60'><img className='w-32 h-44' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="text-[#131313] text-base font-bold flex items-center gap-3 py-4">
                        <span>Tag</span>
                        <span className='flex flex-wrap gap-2'>
                            {
                                tags.map((tag, index) => <span key={index} className='text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] px-3 py-1 rounded-3xl'>#{tag}</span>)
                            }
                        </span>
                    </div>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Page {totalPages}</p>
                    <div className="card-actions justify-start gap-7">
                        <button className="btn btn-primary">Category: {category}</button>
                        <button className="btn btn-warning">Rating: {rating}</button>
                        <button className="btn btn-success">View Details</button>
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