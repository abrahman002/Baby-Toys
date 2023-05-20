import React from 'react';


const FeaturedProducts = () => {
    return (
        <div className='mt-10 mb-10' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <h1 className='text-3xl text-center font-bold mb-10 text-sky-400'>Featured Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5'>
                <div className="card w-96 bg-base-100 mb-5 shadow-md">
                    <figure><img style={{ height: '200px', width: '300px' }} src="https://images-cdn.ubuy.co.in/63e90951d9e17a4a992b5296-baby-toys-6-to-12-months-infant-toys.jpg" alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='text-pink-400 hover:text-sky-400'>Infant Toys Sound Light.</span>
                            <div className="badge badge-secondary">UpComming</div>
                        </h2>
                        <p>Price:$ 10</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 mb-5 shadow-md">
                    <figure><img style={{ height: '200px', width: '300px' }} src="https://images-cdn.ubuy.co.in/633abb3a178ce32de16e71f2-baby-toys-12-18-months-musical-fire.jpg" alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='text-pink-400 hover:text-sky-400'>Cycle & Sports :: Baby Toys .</span>
                            <div className="badge badge-secondary">UpComming</div>
                        </h2>
                        <p>Price:$ 20</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 mb-5 shadow-md ">
                    <figure><img style={{ height: '200px', width: '300px' }} src="https://cdn.shopify.com/s/files/1/0539/4402/5275/products/659621C-Learning-Activity-Walker_250x@2x.jpg?v=1652986815" alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='text-pink-400 hover:text-sky-400'> Musical Fire Truck Toys for 1 Year Old Boys Girls.</span>
                            <div className="badge badge-secondary">UpComming</div>
                        </h2>
                        <p>Price:$ 45</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 mt-5 shadow-md">
                    <figure><img style={{ height: '200px', width: '300px' }} src="https://rflbestbuy.com/images/detailed/126/rattle.-2-gif.gif" alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='text-pink-400 hover:text-sky-400'>Little Tikes Toys for Babies .</span>
                            <div className="badge badge-secondary">UpComming</div>
                        </h2>
                        <p>Price:$ 35</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 mt-5 shadow-md ">
                    <figure><img style={{ height: '200px', width: '300px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh0zCnXE3cYXBmQPrrCjjK-aaiBtWreld6Q&usqp=CAU" alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='text-pink-400 hover:text-sky-400'>Little Tikes Baby Toys and Gear.</span>
                            <div className="badge badge-secondary">UpComming</div>
                        </h2>
                        <p>Price:$ 30</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 mt-5 shadow-md ">
                    <figure><img style={{ height: '200px', width: '300px' }} src="https://m.media-amazon.com/images/I/71QyNYo+-vS._AC_SL1500_.jpg" alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='text-pink-400 hover:text-sky-400'>Touch & Go Musical Light Infant Toys Baby.</span>
                            <div className="badge badge-secondary">UpComming</div>
                        </h2>
                        <p>Price:$ 40</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;