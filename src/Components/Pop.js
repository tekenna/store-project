import React, { Component } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Pop extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { trigger, popClose } = value;
          const { img, title, price } = value.ProductModel;

          if (trigger === false) {
            return null;
          } else {
            return (
              <PopContainer>
                <div className="content_wrapper">
                  <div className="pop_header">
                    <p>item added to cart</p>
                    <AiOutlineClose
                      size="1em"
                      className="close_btn"
                      onClick={() => popClose()}
                    />
                  </div>
                  <div className="pop_content_container">
                    <img src={img} width="100%" alt="cart item" />
                    <div className="pop_content">
                      <h5>{title}</h5>
                      <h5 className="price">Price : $ {price} </h5>
                      <div className="btn_container">
                        <Link to="/">
                          <button style={{textDecoration:" none"}} onClick={() => popClose()}>
                            Back to products
                          </button>
                        </Link>
                        <Link style={{textDecoration: "none"}} to="/carts">
                          <button className="cart_btn" onClick={() => popClose()}>
                            Go to carts
                          </button>
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </PopContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
export default Pop;

const PopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(161, 187, 221, 0.4);
  font-weight: bold;

  .content_wrapper {
    width: 15rem;
    padding: 0.5rem 1rem;
    position: absolute;
    top: 25%;
    left: 40%;
    right: 40%;
    background-color: white;
    padding-bottom: 2rem;
    border-radius: 0.3rem;
  }
  .pop_content_container {
    width: 100%;
    margin-top: -1rem;
  }
  .pop_content {
    margin-top: -1rem;
    line-height: 0.5rem;
  }
  .pop_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--Blue);
    text-transfrom: uppercase;
  }
  .pop_header p {
    text-transfrom: uppercase;
  }
  .close_btn {
    margin: 1.5rem 1rem 0 0;
    color: red;
  }
  .price {
    text-transform: uppercase;
    color: gray;
    cursor: default;
  }
  .btn_container{
    display: flex;
  }
  button {
    margin-right: 0.5rem;
    border-radius: 0.3rem;
    border-color: var(--Blue);
    color: var(--Blue);
    height: 1.5rem;
  }
  .cart_btn {
    border-color: var(--Yellow);
    color: var(--Yellow);
  }
`;
