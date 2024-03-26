import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
        <div>
            {
                readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
            }

        </div>
    );
};

export default ListedBooks;