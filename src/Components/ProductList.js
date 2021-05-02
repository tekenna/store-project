import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
import styled from "styled-components";

class ProductList extends Component {
  render() {
    // console.log(this.state.products)
    return (
      <ProductWrapper>
        <h1>Our Products</h1>
        <div className="product_contents">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

export default ProductList;
const ProductWrapper = styled.div`
  width: 90%;
  margin: auto;
  color: var(--Blue);
  .product_contents {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
  }
`;
