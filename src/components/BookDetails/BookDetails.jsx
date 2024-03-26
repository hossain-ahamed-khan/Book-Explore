import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();

    const book = books.find(book => book.bookId == id);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="flex gap-8">
            <div className="w-1/2 bg-[#1313130D] rounded-2xl">
                <img className="w-9/12 mx-auto py-16" src={image} alt="" />
            </div>

            <div className="w-1/2 border">
                <h1>{bookName}</h1>
                <p>By: {author}</p>
                <p>{category}</p>
                <p>Review: {review}</p>
                <p>Tag <span className='flex flex-wrap gap-2'>
                    {
                        tags.map((tag, index) => <p key={index} className='text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] px-3 py-1 rounded-3xl'>{tag}</p>)
                    }
                </span>
                </p>
                <p>Number of Pages: {totalPages}</p>
                <p>Publisher: {publisher}</p>
                <p>Year of Publishing: {yearOfPublishing}</p>
                <p>Rating: {rating}</p>

                <div>
                    <button>Read</button>
                    <button>Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;