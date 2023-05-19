import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../Shop by category/ShopByCategory';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;