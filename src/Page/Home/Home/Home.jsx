import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../Shop by category/ShopByCategory';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import Post from '../../Post/Post';
import Delivery from '../../Delivery/Delivery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FeaturedProducts></FeaturedProducts>
            <Post></Post>
           <Delivery></Delivery>
        </div>
    );
};

export default Home;