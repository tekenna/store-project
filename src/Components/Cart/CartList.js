import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { BsTrashFill } from "react-icons/bs";

class CartList extends Component {
  render() {
    const Item = this.props.value.map((item) => {
      return (
        <CartTableHead>
          <ProductConsumer>
            {(value) => {
              const { decrement, increment, removeItem } = value;
              return (
                <>
                  <div className="num_head">
                    <p>#</p>
                  </div>
                  <div className="table_row">
                    <img src={item.img} width="80rem" alt="item" />
                  </div>
                  <div className="table_row">
                    <p>{item.title}</p>
                  </div>
                  <div className="table_row">
                    <p>{item.price}</p>
                  </div>

                  <div className="table_row">
                    <div className="btn_container">
                      <button
                        onClick={() =>
                          item.count === 1
                            ? removeItem(item.id)
                            : decrement(item.id)
                        }
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                  <div className="table_row">
                    <BsTrashFill
                      className="trash"
                      size="2em"
                      color="var(--Yellow)"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                  <div className="table_row">
                    <p>{item.total}</p>
                  </div>

                  <div className="cart_total"></div>
                </>
              );
            }}
          </ProductConsumer>
        </CartTableHead>
      );
    });
    return <div style={{ paddingBottom: "3rem" }}>{Item}</div>;
  }
}
export default CartList;
const CartTableHead = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  .num_head {
    text-align: center;
    width: 20%;
  }
  .table_row {
    text-align: center;
    width: 100%;
    font-weight: bold;
    color: gray;
  }
  p {
    padding-top: 0.7rem;
    font-size: larger;
  }
  .btn_container {
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
  }
  .trash {
    margin-top: 1.8rem;
  }
`;
