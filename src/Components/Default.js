import React, { Component } from "react";
import styled from "styled-components";

class Default extends Component {
  render() {
    return (
      <ErrorPage>
        <div className="err_content">
          <img src="../images/oops.jpg" alt="404" />
          <h1>page not found</h1>
          <p className="top_text">
            wrong url path  " <span className="style_text"> ... {this.props.location.pathname}</span> "
          </p>
        </div>
      </ErrorPage>
    );
  }
}
export default Default;
const ErrorPage = styled.div`
  width: 90%;
  margin: 2rem auto;
  text-align: center;
  .top_text span{
    color: red;
  }
`;
