import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Details extends Component {
  
  
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            discription,
            inCart,
            price,
            img,
            title,
          } = value.ProductDetail;
          return (
            <DetailContainer>
              <div className="prod_img_wrap">
                <img src={img} alt="product item" />
              </div>
              <div className="about_prod_wrap">
                <span className="start_text top_text">Official Store</span>
                <h2>{discription}</h2>
                <div className="text_span">
                  <span>
                    <p>Model:</p>
                    <p>{title}</p>
                  </span>
                  <span>
                    <p>Brand:</p>
                    <p>{company}</p>
                  </span>
                </div>
                <p className="price">${price}</p>
                <div className="button_container">
                  <Link to="/">
                    <button className="top_text">Continue shopping</button>
                  </Link>

                  <button disabled={inCart?true: false} className="top_text" onClick={()=>{
                    value.addCart(id)
                    value.popOpen(id)
                  }}>
                    {inCart?"In Cart": "add to cart"}
                  </button>
                </div>
              </div>
            </DetailContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
  width: 90%;
  justify-content: space-evenly;
  padding-bottom: 2rem;

  .start_text {
    background-color: var(--Red);
    color: gold;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
  }
  .about_prod_wrap {
    text-transform: capitalize;
    width: 40%;
  }
  .about_prod_wrap h2 {
    text-transform: capitalize;
    border-bottom: 1px solid gray;
    padding-bottom: 0.5rem;
  }
  .text_span {
    border-bottom: 1px solid gray;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: -1.2rem;
    justify-content: space-between;
  }
  .text_span span {
    padding-right: 2rem;
    border-right: 1px solid gray;
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;
    color: gray;
  }
  .price {
    font-family: "Zen Dots", cursive !important;
    font-weight: bolder;
    font-size: larger;
  }
  .button_container {
    display: flex;
    flex-wrap: wrap;
  }
  button {
    padding: 0.5rem 1rem;
    margin-right: 2rem;
    border: none;
    color: rgb(8, 131, 90);
    font-size: larger;
    border-radius: 0.3rem;
    background-color: rgba(0, 0, 255, 0.096);
  }
`;
