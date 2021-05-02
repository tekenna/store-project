import React from 'react'
import styled from "styled-components"
import {AiFillDollarCircle} from "react-icons/ai"
import {IoIosCash} from "react-icons/io"


function FancyHeader() {
    return (
        <FancyWrapper className="nav_fancydisplay">
            <h1>Qaulity <span> Brands</span> </h1>
            <div className="nav_icons">
                <AiFillDollarCircle style={{marginTop: "1rem"}} size="2em" color="green"/>
                <img src="../crypto.png" width="30rem" alt="cryptoLogo"/>
                <IoIosCash style={{marginTop: "1rem"}} size="2em" color="green" />
            </div>
            <div className="nav_end_text">
                <h3>Affordable</h3>
                <p className="top_text">Buy in any currency</p>
            </div>
        </FancyWrapper>
    )
}

export default FancyHeader

const FancyWrapper = styled.div`
    background-color: var(--Dark);
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;

    h1{
        color: rgb(240, 196, 1);
        font-weight: 900;
    }
    h1 span{
        color: black;
        font-weight: 900;
    }
    .nav_end_text{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0;
        margin: 0;
        line-height: -0rem;
    }
    .nav_end_text h3{
        color: var(--Blue);
        font-weight: 900;
        padding: 0;
    }
    .nav_end_text p{
        color: white;
        font-weight: 900;
        padding: 0;
        text-transform: uppercase;
    }
    @media screen and (max-width: 700px){
        .nav_fancydisplay{
          display: flex;
          justify-content: space-around;
        }
        .nav_end_text{
          display: none;
        }
      }
`