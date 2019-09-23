import React from 'react';
import {useContext} from 'react';
import {AppContext} from "../context";
import Title from '../components/Title';

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};

function ProductFilter({products}) {
    let types = getUnique(products,"type").sort();
    types = ['all',...types];
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
        }
    );
    const context = useContext(AppContext);
    const {handleChange,type,price,minPrice,maxPrice,sortField,sortDirection,sortedProducts} = context;
    return (<section className="filter-container">
        <Title title={'Filter Instruments (' + sortedProducts.length + ')'} />
        <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">instrument type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="price">price ${price}</label>
                <input type="range" name="price" id="price" value={price} min={minPrice} max={maxPrice} className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="sortField">sort by</label>
                <select name="sortField" id="sortField" value={sortField} className="form-control" onChange={handleChange}>
                    <option value="name">instrument name</option>
                    <option value="price">price</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="sortDirection">sort direction</label>
                <select name="sortDirection" id="sortDirection" value={sortDirection} className="form-control" onChange={handleChange}>
                    <option value="1">ascending</option>
                    <option value="-1">descending</option>
                </select>
            </div>
        </form>
    </section>);
}

export default ProductFilter;