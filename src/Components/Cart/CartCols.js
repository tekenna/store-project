import React from 'react'
import styled from "styled-components"

function CartCols() {
    return (
        <CartTableHead className="table">
            <div className="num_head">
                <p>#</p>
            </div>
            <div className="table_row">
                <p>products</p>
            </div>
            <div className="table_row">
                <p>Brand/Model</p>
            </div>
            <div className="table_row">
                <p>Price</p>
            </div>
            <div className="table_row">
                <p>Qauntity</p>
            </div>
            <div className="table_row">
                <p>Remove Item</p>
            </div>
            <div className="table_row">
                <p>Total</p>
            </div>
        </CartTableHead>
    )
}

export default CartCols
const CartTableHead = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
    font-size: large;
    border-bottom: 3px solid var(--Dark);
    .num_head{
        text-align: center;
        width: 20%
    }
    .table_row{
        text-align: center;
        width: 100%;
        font-weight: bold;
    }
`