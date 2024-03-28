import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import WishlistBook from "../WishlistBook/WishlistBook";
import { getWishlist } from "../../utility/localStorage";


const WishlistBooks = () => {

    const books = useLoaderData();
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedWishlistIds = getWishlist();

        if (books.length > 0) {
            const wishlist = [];
            for (const id of storedWishlistIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    wishlist.push(book);
                }
            }

            setWishlistBooks(wishlist);
        }
    }, [])


    return (
        <div>
            {
                wishlistBooks.map(wishBook => <WishlistBook key={wishBook.bookId} wishBook={wishBook}></WishlistBook>)
            }
        </div>
    );
};

export default WishlistBooks;