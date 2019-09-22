import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedProducts from "../components/FeaturedProducts";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
        <Hero>
            <Banner title="Musical Instruments" subtitle="For Students of All Ages">
                <Link to="/products" className="btn-primary">Our Products</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedProducts />
        </>
    );
}

export default Home;