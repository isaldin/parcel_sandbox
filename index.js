import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const App = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "helvetica";
`;

const Header = styled.header`
  height: 100px;
  text-align: center;
  background-color: red;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Footer = styled.footer`
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  background-color: green;
  bottom: 0;
`;

const Col = styled.div`
  flex: ${props => props.flex || 1};
  background-color: ${props => props.color || "white"};
`;

const Span = ({ text }) => <span>{text}</span>;

const Page = ({ children }) => (
  <App>
    <Header>header here</Header>
    <Main>{children}</Main>
    <Footer>footer here</Footer>
  </App>
);

ReactDOM.render(
  <Page>
    <Col>
      <Span text="Hey" />
    </Col>
    <Col flex={3} color="purple">
      <Span text="Hop" />
    </Col>
    <Col>
      <Span text="Lalaley" />
    </Col>
  </Page>,
  document.getElementById("root")
);
