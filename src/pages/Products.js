import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import ProductsContainer from '../components/ProductsContainer';

function Products() {
    return (<>
        <Hero hero="productsHero">
            <Banner title="our products">
                <Link to="/" className="btn-primary">home</Link>
            </Banner>
        </Hero>
        <ProductsContainer/>
    </>);
}

export default Products;