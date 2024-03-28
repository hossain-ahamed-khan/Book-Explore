import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { getReadBook } from "../../utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getReadBook();

        if (books.length > 0) {
            const booksRead = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksRead.push(book);
                }
            }

            setReadBooks(booksRead);
        }
    }, [])
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
                <Link role="tab" className="tab tab-active active">Read Books</Link>
                <Link role="tab" className="tab">Wishlist Books</Link>
            </div>

            <div>
                {
                    readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
                }
            </div>
        </>
    );
};

export default ListedBooks;