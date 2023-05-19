import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../Shop by category/ShopByCategory';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import Post from '../../Post/Post';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FeaturedProducts></FeaturedProducts>
            <Post></Post>
        </div>
    );
};

export default Home;