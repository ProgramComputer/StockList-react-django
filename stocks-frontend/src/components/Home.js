import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StockList from "./StockList";
import NewStockModal from "./NewStockModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    stocks: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStocks = () => {
    axios.get(API_URL).then(res => this.setState({ stocks: res.data }));

  };

  resetState = () => {
    this.getStocks();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StockList
              stocks={this.state.stocks}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStockModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;