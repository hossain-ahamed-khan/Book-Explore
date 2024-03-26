

const Banner = () => {
    return (
        <div className="w-full h-[554px] flex items-center bg-[#1313130D] rounded-3xl mt-5 mb-20">
            <div className="w-4/5 mx-auto flex justify-between items-center gap-12">
                <div>
                    <h1 className="text-[#131313] text-6xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                    <button className="mt-20 bg-[#23BE0A] px-5 py-2 rounded-lg text-white text-xl font-bold">View The List</button>
                </div>
                <div>
                    <img src="/hero-image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;