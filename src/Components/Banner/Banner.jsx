

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: 'url("https://i.ibb.co/VgvWTt3/banner-2.png")' }}>
            <div className="relative text-center">
                <button className="mt-6 md:mt-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-8 rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition duration-300">
                    Let's Explore
                </button>
            </div>
        </div>

    );
};

export default Banner;