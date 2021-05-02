import React, { Component } from "react";
import { StoreProducts, ProductDetail } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      ProductDetail: ProductDetail,
      cart: [],
      trigger: false,
      ProductModel: ProductDetail,
      total: 0,
      tax: 0,
      NewTotal: 0,
    };
  }
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let items = [];
    StoreProducts.forEach((item) => {
      const singleItem = { ...item };
      items = [...items, singleItem];
    });
    this.setState(() => {
      return { products: items };
    });
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);

    this.setState(() => {
      return { ProductDetail: product };
    });
  };
  addCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] };
    }, ()=>this.addTotal());
  };
  popOpen = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { ProductModel: product, trigger: true };
    });
  };
  popClose = () => {
    this.setState(() => {
      return { trigger: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(() => {
      return { cart: [...tempCart] };
    },()=> this.addTotal());
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
    }
    this.setState(() => {
      return { cart: [...tempCart] };
    },()=> this.addTotal());
  };
  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));
    let RemovedItem = tempProduct[index];
    RemovedItem.inCart = false;
    RemovedItem.count = 0;
    RemovedItem.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProduct],
      };
    },()=> this.addTotal());
  };
  clearCart = () => {
    this.setState(()=>{
      return {cart:[]}
    }, ()=>{
      this.setProducts()
      this.addTotal()
    })
  };
  addTotal= ()=>{
    let subTotal = 0
    this.state.cart.map(item=>{
      return subTotal += item.total
    })
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    this.setState(()=>{
      return({
        total: subTotal,
        tax: tax,
        NewTotal: total
      })
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addCart: this.addCart,
          trigger: this.state.trigger,
          popOpen: this.popOpen,
          popClose: this.popClose,
          clearCart: this.clearCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
