import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/altosax.png';
import PropTypes from 'prop-types';

function Product({product}) {
    const {name,slug,image,price} = product;

    return (<article>
        <div className="img-container">
            <img src={image || defaultImg} alt="product" />
            <div className="price-top"><h6>${price}</h6></div>
            <Link to={`/products/${slug}`} className="btn-primary product-link">Details</Link>
        </div>
        <p className="product-info">{name}</p>
    </article>);
}

export default Product;

Product.propTypes = {
    product:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
    })
};