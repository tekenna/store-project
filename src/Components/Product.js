import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";

class Product extends Component {
  render() {
    const { id, company, title, img, price, inCart } = this.props.product;

    return (
      <ProductContainer>
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div className="img-container p-5">
                <Link to="/details" onClick={() => value.handleDetail(id)}>
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addCart(id);
                    value.popOpen(id);
                  }}
                >
                  {inCart ? (
                    <span className="incart_text" disabled>
                      {" "}
                      in cart
                    </span>
                  ) : (
                    <FaCartPlus color="white" size="2em" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-body">
            <span className="company">{company}</span>
            <div className="card_body_text">
              <span className="title">{title}</span>
              <span>${price}</span>
            </div>
          </div>
        </div>
      </ProductContainer>
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductContainer = styled.div`
  margin-bottom: 1rem;
  .card {
    border-color: transparent;
    transition: all 1s linear ease;
    background-color: white;
    padding-bottom: 1rem;
    position: relative;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 15rem;
    height: 16rem;
  }
  .card-body {
    background-color: var(--Dark);
    border-radius: 0 0 0.5rem 0.5rem;
  }
  .company {
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    background-color: rgba(5, 73, 112, 0.5);
    height: 1.5rem;
    padding: 0 0.5rem;
    border-radius: 0.2rem;
    color: rgb(232, 243, 248);
  }
  .card_body_text {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    color: white;
    font-weight: bold;
  }
  .title {
    color: var(--Yellow);
  }

  &:hover {
    .card {
      box-shadow: 2px 2px 5px var(--Blue);
    }
  }
  .incart_text {
    color: white;
    font-size: large;
  }
  .img-container {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 3px var(--Blue);
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: white;
    width: 100%;
    height: 95%;
  }
  .card-img-top {
    transition: all 1s linear;
    width: 100%;
    height: 100%;
  }
  .image-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.4rem 1rem;
    background-color: rgba(5, 73, 112, 0.7);
    border: none;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    background-color: rgb(5, 73, 112);
  }
`;
