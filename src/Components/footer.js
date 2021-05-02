import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FootWrapper>
      <div className="foot_content">
        <div className="foot_text">
          <h2>
            <span>Contact</span>Info
          </h2>
          <p>Rich Towers, PLOT 12 Balogun Rd, Ikeja, Lagos, N</p>
        </div>
        <button>
          <img src="../images/whats_icon.png" width="14rem" alt="whats-app" />
          <span>Chat with us</span>
        </button>
      </div>
    </FootWrapper>
  );
}

export default Footer;
const FootWrapper = styled.div`
    background-color: var(--Dark);
    width: 90%;
    margin: auto;
    text-align: center;
    height: 7rem;
    padding-top: 0.5rem;
    padding-bottom: 2rem;

    h2{
        color: rgb(240, 196, 1);
        font-weight: 900;
    }
    h2 span{
        color: white;
        font-weight: 900;
        padding-right: 0.5rem;
    }
    button{
        color: white;
        border: none;
        background-color: rgba(75, 167, 75, 0.507);
        font-size: small;margin-bottom: 2rem auto;
        padding: 0.3rem 1rem;
        border-radius: 0.5rem;
        display: flex;
        margin: auto;
    }
    button span{
        padding-left: 0.5rem;
    }
    
`;
