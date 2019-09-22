import React, {Component} from 'react';
import {AppContext} from "../context";
import Loading from './Loading';
import Product from '../components/Product';
import Title from '../components/Title';

class FeaturedProducts extends Component {
    static contextType = AppContext;

    render() {
        let {loading,featuredProducts:products} = this.context;
        products = products.map(product => {
                return <Product key={product.id} product={product} />
            }
        );
        return (
            <section className="featured-products">
                <Title title="featured products" />
                <div className="featured-products-center">
                    {loading ? <Loading/> : products}
                </div>
            </section>
        );
    }
}

export default FeaturedProducts;