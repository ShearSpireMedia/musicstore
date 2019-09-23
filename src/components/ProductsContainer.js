import React from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import {withContextConsumer} from "../context";
import Loading from '../components/Loading';

function ProductsContainer({context}) {
    const {loading,sortedProducts,products} = context;
    if (loading){
        return <Loading/>
    }
    //console.log(context);
    return (<>
        <ProductFilter products={products} />
        <ProductList products={sortedProducts} />
    </>);
}

export default withContextConsumer(ProductsContainer);