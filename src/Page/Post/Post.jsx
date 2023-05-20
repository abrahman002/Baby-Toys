import React from 'react';
import './post.css'

const Post = () => {
    return (
        <div className='mb-10 ' data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <h1 className='text-3xl font-bold text-center text-sky-400'>Our Recent Post</h1>
            <div className='flex justify-center post'>
                <img src="https://i.fbcd.co/products/original/d84be1fbd046c699a46130f4dff56e3158f0d042427430a1cd7465a5fd52c0a7.jpg" alt="" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-sm">
                    <figure><img src="https://cdn.shopify.com/s/files/1/2717/2754/articles/blog12_grande.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tinytots Gift Pack for birthdays</h2>
                        <p>Celebrate birthdays with the Tinytots Gift Pack! Packed with joy and excitement, this delightful gift set includes a collection of fun and educational toys perfect for little ones...</p>
                        <div className="card-actions ">
                            <button className="btn btn-warning">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-sm">
                    <figure><img src="https://cdn.shopify.com/s/files/1/2717/2754/articles/blog11_grande.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Keep kids warm after a bath...</h2>
                        <p>Cozy and absorbent Kids' Warmth Robe keeps little ones warm after bath time with a cute animal design...</p>
                        <div className="card-actions ">
                            <button className="btn btn-warning">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-sm">
                    <figure><img src="https://cdn.shopify.com/s/files/1/2717/2754/articles/blog10_grande.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Gifts for the little bundles of joy</h2>
                        <p>Discover the perfect gifts for the little bundles of joy with our delightful collection. From cuddly plush toys to interactive games.....</p>
                        <div className="card-actions">
                            <button className="btn btn-warning">Read more</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post;