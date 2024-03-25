import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <>
            <h1 className="text-[#131313] text-4xl font-bold text-center my-6">Books</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>


        </>
    );
};

export default Books;