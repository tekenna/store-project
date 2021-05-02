import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

function Empty() {
    return (
        <EmptyContainer>
            <img src="../../images/oops.jpg" alt="empty cart"/>
            <h1>Your cart is currently empty</h1>
            <Link to="/">
                <button>Add to your cart</button>
            </Link>
        </EmptyContainer>
    )
}

export default Empty

const EmptyContainer = styled.div`
    margin-top:2rem;
    text-align: center;
    button{
        border-color: var(--Blue);
        color: var(--Blue);
        padding: 0.5rem 1rem;
        font-weight: bold;
        text-transform: uppercase;
        font-size: large;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
`