import React, {Component} from 'react';
import Client from './Contentful';
import items from './data';

const useLocalData = false; // set this boolean as needed for local data or contentful.com data
const AppContext = React.createContext();

class DataProvider extends Component {
    state = {
        products:[],
        sortedProducts:[],
        featuredProducts:[],
        loading:true,
        type:'all',
        price:0,
        minPrice:0,
        maxPrice:0,
        sortField:"name",
        sortDirection:1
    };
    getData = async () => {
        try {
            let response,products;
            if (useLocalData){
                products = this.formatData(items);
            }else{
                response = await Client.getEntries({content_type:'musicalInstruments',order:'fields.name'});
                products = this.formatData(response.items);
                //console.log(JSON.stringify(products));
            }
            let featuredProducts = products.filter(product => product.featured === true);
            let prices = products.map(item => item.price);
            let maxPrice = Math.max(...prices);
            this.setState({
                products,
                featuredProducts,
                sortedProducts:products,
                loading:false,
                price:maxPrice,
                maxPrice
            });
        }catch(error){
            console.log(error);
        }

    };
    componentDidMount(){
        this.getData();
    }
    formatData(items){
        return items.map(item => {
            let id = item.sys.id;
            let image = item.fields.image.fields.file.url;
            return {...item.fields,image,id};
        });
    }
    getProduct = (slug) => {
        let products = [...this.state.products];
        return products.find((product) => product.slug === slug);
    };
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        },this.filterProducts);
    };
    filterProducts = () =>{
        let {products,type,price,sortField,sortDirection} = this.state;
        let temp = [...products];
        price = parseInt(price);
        if (type !== "all"){
            temp = temp.filter(product => product.type === type);
        }
        temp = temp.filter(product => product.price <= price);

        let sortKind = sortField === "price" ? "numeric" : "text";

        temp.sort(compareField);
        function compareField(a, b) {
            let valueA = a[sortField];
            let valueB = b[sortField];
            if (sortKind === "numeric"){
                valueA = Number(valueA);
                valueB = Number(valueB);
            }else{
                valueA = valueA.toUpperCase();
                valueB = valueB.toUpperCase();
            }
            let comparison = 0;
            if (valueA > valueB) {
                comparison = 1;
            } else if (valueA < valueB) {
                comparison = -1;
            }
            return comparison * sortDirection;
        }
        this.setState({sortedProducts:temp});
    };

    render() {
        return (
            <AppContext.Provider value={
                {...this.state,
                    getProduct:this.getProduct,
                    handleChange:this.handleChange}
            }>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const ContextConsumer = AppContext.Consumer;
//this higher order function is one way to pass the context to a component
export function withContextConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <ContextConsumer>
                {value => <Component {...props} context={value} />}
            </ContextConsumer>
        );
    }
}
export {DataProvider,ContextConsumer,AppContext} ;