
// store and get data for read books 

const getReadBook = () => {
    const storedReadBook = localStorage.getItem('read-books');
    if (storedReadBook) {
        return JSON.parse(storedReadBook)
    }
    return [];
}


const saveReadBooks = id => {
    const storedReadBooks = getReadBook();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if (!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

export { getReadBook, saveReadBooks };


// store and get data for wishlist 

const getWishlist = () => {
    const storeWishlist = localStorage.getItem('wish-list');
    if (storeWishlist) {
        return JSON.parse(storeWishlist)
    }
    return [];
}

const saveWishlists = id => {
    const storeWishlists = getWishlist();
    const exists = storeWishlists.find(bookId => bookId === id);
    if (!exists) {
        storeWishlists.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storeWishlists));
    }
}

export { getWishlist, saveWishlists };