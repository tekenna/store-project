import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartCols from "./CartCols";
import CartList from "./CartList";
import Empty from "./empty";
// import CartTotal from "./CartTotal";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <CartBody>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="cart_header">
                    <h1>Your cart</h1>
                    <Link to="/">
                      <button onClick={() => value.clearCart()}>
                        Clear cart
                      </button>
                    </Link>
                  </div>
                  <CartCols />
                  <CartList key={cart.id} value={cart} />

                  <TotalContainer>
                    <h2 className="top_text">
                      Subtotal : <span>${value.total}</span>
                    </h2>
                    <h2 className="top_text">
                      tax : <span>${value.tax}</span>
                    </h2>
                    <h2 className="top_text">
                      Total : <span>${value.NewTotal}</span>
                    </h2>
                  </TotalContainer>
                </React.Fragment>
              );
            } else {
              return <Empty />;
            }
          }}
        </ProductConsumer>
      </CartBody>
    );
  }
}

export default Cart;
const CartBody = styled.section`
  width: 90%;
  margin: 0.5rem auto;
  position: relative;
  h1 {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 3rem;
  }
  .cart_header {
    display: flex;
    justify-content: space-between;
  }
  .cart_header button {
    margin-top: 4rem;
    color: purple;
    border: 0.5px solid purple;
    border-radius: 0.3rem;
  }
`;
const TotalContainer = styled.section`
  text-transform: uppercase;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;

  h2 {
    color: green;
    font-size: 1rem;
  }
  span {
    color: var(--Blue);
    padding-left: 2rem;
  }
`;
