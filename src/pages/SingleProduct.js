import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from "../context";
import defaultImg from "../images/altosax.png";

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug:this.props.match.params.slug
        };
    }
    static contextType = AppContext;
    //componentDidMount() { in case you need a specific API call for this data}
    render() {
        const {getProduct} = this.context;
        const product = getProduct(this.state.slug);
        if (!product){
            return (
                <div className="error">
                    <h3>No such instrument could be found.</h3>
                    <Link to="/products" className="btn-primary">back to products</Link>
                </div>
            );
        }
        const {name,type,description,price,image,shopurl} = product;
        return (
            <section className="single-product">

                <div className="single-product-info">
                    <div className="product-image">
                        <img src={image || defaultImg} alt={name} />
                    </div>
                    <article className="desc">
                        <h3>{name}</h3>

                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>name: {name}</h6>
                        <h6>type: {type}</h6>
                        <h6>price: ${price}</h6>
                        <a href={shopurl} className="btn-primary" target="_blank" rel="noopener noreferrer">Buy Online</a>
                    </article>
                </div>
            </section>
        );
    }
}

export default SingleProduct;