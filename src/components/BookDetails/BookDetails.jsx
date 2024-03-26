import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();

    const book = books.find(book => book.bookId == id);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="flex gap-8 mt-8">
            <div className="w-1/2 bg-[#1313130D] rounded-2xl">
                <img className="w-9/12 mx-auto py-16" src={image} alt="" />
            </div>

            <div className="w-1/2 border">
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
                <p className="border-t-2 text-[#131313B3] text-base font-normal pt-4">Number of Pages: {totalPages}</p>
                <p className="text-[#131313B3] text-base font-normal pt-2">Publisher: {publisher}</p>
                <p className="text-[#131313B3] text-base font-normal pt-2">Year of Publishing: {yearOfPublishing}</p>
                <p className="text-[#131313B3] text-base font-normal pt-2">Rating: {rating}</p>

                <div className="pt-4">
                    <button className="text-[#131313] text-lg font-semibold px-4 py-2 border rounded-lg mr-4">Read</button>
                    <button className="text-white bg-[#50B1C9] text-lg font-semibold px-4 py-2 border rounded-lg">Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;