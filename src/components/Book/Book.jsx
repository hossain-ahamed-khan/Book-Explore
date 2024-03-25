

const Book = ({ book }) => {
    const { bookName, author, image, rating, category, tags } = book;
    return (
        <div>
            <div className="card border border-[#13131326] rounded-2xl">
                <figure className="w-11/12 h-72 mx-auto mt-6 bg-[#F3F3F3]"><img className="w-2/4 h-3/4 mx-auto" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        {tags}
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="flex justify-between">
                        <p>{category}</p>
                        <p>{rating} <span>stars</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;