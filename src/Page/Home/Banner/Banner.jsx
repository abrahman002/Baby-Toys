



const Banner = () => {



    return (
        <div className="carousel w-full md:h-[300px] lg:h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://johnlewis.scene7.com/is/image/JohnLewis/baby_toys_cw_231221" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.ctfassets.net/9wtva4vhlgxb/VHdjmgapuYyAmoXzinUrI/cd3941ffd4e0685375b465bd42459d93/Best_baby_toys_720x432.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/photos/african-baby-girl-playing-with-toy-blocks-at-home-picture-id1347251783?b=1&k=20&m=1347251783&s=170667a&w=0&h=VYpoj5fRgW70DUhsaLL-saKIE9tfbzu0ptUa5CwUe8o=" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://www.parents.com/thmb/Fxni-5UtirMKkau-fcWeVMbMuWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-Stocksy_txpba4a11733Dc300_Medium_3016087-42e21cc3cb1041f981f28ce2bb428e13.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;